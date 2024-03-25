import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Tesseract from "tesseract.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import LeftSideBar from "../../components/leftsidebar/LeftSideBar";



const FlashCardPage = () => {
  const [paragraph, setParagraph] = useState("");
  const [image, setImage] = useState("");
  const [flashcards, setFlashcards] = useState([]);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);

  const handleParagraphChange = (e) => {
    setParagraph(e.target.value);
  };

  const genAI = new GoogleGenerativeAI(
    "AIzaSyAbvnixXCwQf2yNUe5k4DFhEeMBaIvaw1M"
  );

  const fetchData = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Think you are the teacher who summarises any sort of paragraph and highlights the paragraph into 10 sentences separated by a space, for now, the paragraph is: ${paragraph}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    // Extracting sentences without numbers and stars
    const sentences = text
      .split("\n")
      .map((sentence) => sentence.replace(/^\d+\.\s*/, ""));

    // Set extracted sentences as flashcards
    setFlashcards(
      sentences.map((sentence, index) => ({
        id: index,
        text: sentence,
      }))
    );
  };

  const readText = async () => {
    if (image.data != null) {
      const text = await Tesseract.recognize(image, "eng");
      const realText = text.data.text;
      console.log(realText);
    } else {
    }
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async () => {
    const words = paragraph.split(" ").filter((word) => word.trim());
    const selectedWords = words.slice(0, 10); // Selecting first 10 words
    // Fetch data and read text asynchronously
    await fetchData();
    await readText();
  };

  const handleArrowClick = (direction) => {
    if (direction === "prev") {
      setCurrentFlashcardIndex((prevIndex) =>
        prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentFlashcardIndex((prevIndex) =>
        prevIndex === flashcards.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center py-8">
        <LeftSideBar />
        <div className="rightSide flex flex-col pl-64">
        <textarea
          className="w-96 h-32 resize-none border border-gray-300 rounded-md p-2 mb-4"
          placeholder="Enter paragraph text..."
          value={paragraph}
          onChange={handleParagraphChange}
        />
        <input
          type="file"
          accept="image/*"
          className="mb-4"
          onChange={handleImageChange}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition-colors"
        >
          Generate Flashcards
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-96">
          {flashcards.length > 0 && (
            <div className="relative flex justify-center items-center">
              {/* Arrow button - Previous */}
              <button
                onClick={() => handleArrowClick("prev")}
                className="absolute right-[25rem] top-1/2 transform -translate-y-1/2 bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition-colors z-10"
              >
                &larr;
              </button>
              {/* Flashcard */}
              <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden text-center">
                <h3
                  className="text-3xl font-bold mb-4"
                  style={{ background: "none", fontFamily: "Poppins" }}
                >
                  {flashcards[currentFlashcardIndex].text}
                </h3>
              </div>
              {/* Arrow button - Next */}
              <button
                onClick={() => handleArrowClick("next")}
                className="absolute left-[25rem] top-1/2  transform -translate-y-1/2 bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition-colors z-10"
              >
                &rarr;
              </button>
            </div>
          )}
        </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default FlashCardPage;
