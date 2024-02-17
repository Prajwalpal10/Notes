import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import { useNotesContext } from "../../context/NotesContext";
const Card = () => {
  const { noteData } = useNotesContext();
  return (
    <>
      {noteData?.map((data) => (
        <div key={data.id} className={styles.container}>
          <div className={styles.content}>
            {data ? data.content : "No content available"}
          </div>
          <div className={styles.time}>
            {data ? (
              <>
                <span>{data.date}</span>
                <span className={styles.circle}></span>
                <span>{data.time}</span>
              </>
            ) : (
              "No date and time available"
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
