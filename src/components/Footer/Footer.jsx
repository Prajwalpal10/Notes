import React, { useState } from "react";
import styles from "./Footer.module.css";
import arrowImage from "../../assets/Vector1.png";
import { useNotesContext } from "../../context/NotesContext";

const Footer = ({ id }) => {
  const [textarea, setTextarea] = useState("");
  const { updateNotesData } = useNotesContext();
  
  const handleTextareaChange = (e) => {
    setTextarea(e.target.value);
  };

  const handleSubmit = () => {
    const existingDataJSON = localStorage.getItem("groups");
    const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];
    const groupToUpdate = existingData.find((obj) => obj.id === id);
    const currentDate = new Date();
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
      currentDate 
    );
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${hours % 12 || 12}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${ampm}`;

    const newNote = {
      id: Date.now(),
      content: textarea,
      date: formattedDate,
      time: formattedTime,
    };

    if (groupToUpdate && groupToUpdate.hasOwnProperty("notes")) {
      groupToUpdate.notes.push(newNote);
    } else {
      groupToUpdate.notes = [newNote];
    }
    const updatedData = existingData.map((obj) =>
      obj.id === id ? groupToUpdate : obj
    );
    localStorage.setItem("groups", JSON.stringify(updatedData));
    updateNotesData(groupToUpdate.notes);
    setTextarea("");
  };

  return (
    <div className={styles.container}>
      <textarea
        placeholder="Enter your text here..........."
        value={textarea}
        onChange={handleTextareaChange}
      />

      <img
        src={arrowImage}
        alt="Arrow"
        className={`${styles.arrowImage} ${textarea ? "" : styles.disabled}`}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Footer;
