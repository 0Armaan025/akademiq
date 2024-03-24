import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Tesseract from "tesseract.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const NotesPage = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [summarizedText, setSummarizedText] = useState("");

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const genAI = new GoogleGenerativeAI(
    "AIzaSyAbvnixXCwQf2yNUe5k4DFhEeMBaIvaw1M"
  );

  const fetchData = async (someText) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Make notes of the paragraph, it is: ${content}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    // Extracting sentences without numbers and stars
    setSummarizedText(text);
  };

  const readText = async () => {
    if (image) {
      const text = await Tesseract.recognize(image, "eng");
      const realText = text.data.text;
      console.log(realText);
      return realText;
    } else {
      return "";
    }
  };

  const handleSubmit = async () => {
    let summarizedContent = "";
    if (isImageSelected) {
      const newText = await readText(); // Wait for text extraction from image
      setContent(newText.toString()); // Set the content extracted from image
      const someText = newText;
      await fetchData(someText);
    } else {
      summarizedContent = await fetchData();
      setSummarizedText(summarizedContent);
    }
    console.log("Summarized Content:", summarizedContent);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setIsImageSelected(true);
  };

  const handleCopy = () => {
    // Copy summarized text to clipboard
    navigator.clipboard.writeText(summarizedText);
    alert("Notes copied to clipboard!");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center py-8">
        <textarea
          className="w-96 h-32 resize-none border border-gray-300 rounded-md p-2 mb-4"
          placeholder="Enter paragraph text..."
          value={content}
          onChange={handleContentChange}
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
          Generate Notes
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[50rem]">
          {/* Container to show summarized content */}
          <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden text-center">
            <h3
              className="text-xl font-bold mb-4"
              style={{ background: "none", fontFamily: "Poppins" }}
            >
              {summarizedText && <>{summarizedText}</>}
            </h3>
            {/* Copy button */}
            {summarizedText && (
              <button
                onClick={handleCopy}
                className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md shadow-md hover:bg-gray-400 transition-colors ml-2"
              >
                Copy
              </button>
            )}
          </div>
        </div>
        <br />
        <br />
        <br />
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
    </>
  );
};

export default NotesPage;
