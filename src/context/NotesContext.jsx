import React, { useContext, createContext, useEffect, useState } from "react";
import { useID } from "./IDContext";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [noteData, setNoteData] = useState([]);
  const { groupID } = useID();
  useEffect(() => {
    setNoteData([]);
    const storedDataJSON = localStorage.getItem("groups");
    const storedData = storedDataJSON ? JSON.parse(storedDataJSON) : [];
    const group = storedData.find((obj) => obj.id === groupID);

    if (group && group.notes) {
      setNoteData(group.notes);
    }
  }, [groupID]);

  const updateNotesData = (newData) => {
    setNoteData(newData);
  };

  return (
    <NotesContext.Provider value={{ noteData, updateNotesData }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotesContext = () => {
  return useContext(NotesContext);
};
