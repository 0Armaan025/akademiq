import React, { useState, useRef, useEffect } from "react";
import "./virtualmentorpage.css"; // Import CSS file for styling
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { GoogleGenerativeAI } from "@google/generative-ai";

const VirtualMentorPage = () => {
  const [conversation, setConversation] = useState([
    // Initial conversation
    { speaker: "teacher", message: "Hello! How can I assist you today?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const conversationEndRef = useRef(null);

  const genAI = new GoogleGenerativeAI(
    "AIzaSyAbvnixXCwQf2yNUe5k4DFhEeMBaIvaw1M"
  );

  useEffect(() => {
    scrollToBottom(); // Scroll to the bottom of the chat window when conversation updates
  }, [conversation]);

  const scrollToBottom = () => {
    conversationEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleUserInput = async () => {
    // Make handleUserInput asynchronous
    if (userInput.trim() === "") return;

    setConversation((prevConversation) => [
      ...prevConversation,
      { speaker: "user", message: userInput },
    ]);

    try {
      const teacherResponse = await simulateTeacherResponse(userInput); // Await the teacher response
      setConversation((prevConversation) => [
        ...prevConversation,
        { speaker: "teacher", message: teacherResponse },
      ]);
    } catch (error) {
      console.error("Error generating teacher response:", error);
    }

    setUserInput("");
  };

  const simulateTeacherResponse = async (userInput) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `${userInput}`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();
      console.log(text);
      setUserInput("");
      return text;
    } catch (error) {
      console.error("Error simulating teacher response:", error);
      throw error; // Rethrow the error
    }
  };

  return (
    <>
      <Navbar />
      <div className="virtual-mentor-screen">
        <div className="conversation-container">
          <center>
            <h4
              className="text-3xl font-bold text-black"
              style={{ fontFamily: "Poppins" }}
            >
              Let's study with virtual mentor 🏫
            </h4>
            <br />
            <br />
            <br />
          </center>
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.speaker} w-full flex flex-row justify-start items-start`}
            >
              <span className="speaker">
                {msg.speaker === "user" ? "You:" : "Teacher:"}
              </span>
              <span className="message-text ml-2">{msg.message}</span>
            </div>
          ))}
          <div ref={conversationEndRef} />
        </div>
        <div className="user-input-container">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleUserInput}>Send</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default VirtualMentorPage;
