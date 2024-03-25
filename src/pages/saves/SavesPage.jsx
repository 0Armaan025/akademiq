import React, { useState } from "react";
import "./savespage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const SavesPage = () => {
  // Dummy data for saved items
  const [savedItems, setSavedItems] = useState([
    {
      id: 1,
      type: "Quiz",
      title: "Math Quiz",
      notes: "Notes for Math Quiz...",
    },
    {
      id: 2,
      type: "Note",
      title: "History Notes",
      notes: "Notes for History...",
    },
    {
      id: 3,
      type: "Summary",
      title: "Literature Summary",
      notes: "Summary for Literature...",
    },
    {
      id: 4,
      type: "Flashcard",
      title: "Vocabulary Flashcards",
      notes: "Notes for Vocabulary...",
    },
  ]);

  // Function to delete a saved item
  const deleteItem = (id) => {
    setSavedItems(savedItems.filter((item) => item.id !== id));
  };

  // Function to toggle showing full notes
  const toggleNotes = (id) => {
    setSavedItems(
      savedItems.map((item) =>
        item.id === id ? { ...item, showNotes: !item.showNotes } : item
      )
    );
  };

  return (
    <>
      <Navbar />
      <div className="savesPage p-8">
        <h1
          className="text-3xl font-bold mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          Saves (CONTAINS DUMMY DATA = PROTOTYPE = WORK IN PROGRESS = WILL BE
          CONTINUED AFTER HACKATHON ENDS)
        </h1>
        {savedItems.map((item) => (
          <div
            key={item.id}
            className="savedItem bg-white p-4 rounded-md shadow-md mb-4 flex justify-between items-center"
          >
            <div style={{ background: "none" }}>
              <h2
                style={{ background: "none" }}
                className="text-xl font-semibold"
              >
                {item.type}
              </h2>
              <p style={{ background: "none" }}>{item.title}</p>
              {item.showNotes && (
                <p style={{ background: "none" }}>{item.notes}</p>
              )}
            </div>
            <div style={{ background: "none" }}>
              <button
                className="bg-blue-500 p-2 rounded-sm text-white"
                onClick={() => toggleNotes(item.id)}
              >
                {item.showNotes ? "Hide Notes" : "Show Notes"}
              </button>
              <button
                className="bg-[#ad2323] p-2 text-white rounded-lg ml-4"
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {savedItems.length === 0 && (
          <p className="text-gray-500">No items saved yet.</p>
        )}
      </div>
      <br />
      <br />

      <Footer />
    </>
  );
};

export default SavesPage;
