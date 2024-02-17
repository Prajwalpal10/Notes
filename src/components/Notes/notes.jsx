import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Cards from "../Cards/Cards";
import styles from "./notes.module.css";
import { useID } from "../../context/IDContext";
import { NotesProvider } from "../../context/NotesContext";
const Notes = () => {
  const { groupID } = useID();
  return (
    <div className={styles.container}>
      <Header id={groupID} />
      <NotesProvider>
        <Cards />
        <Footer id={groupID} />
      </NotesProvider>
    </div>
  );
};

export default Notes;
