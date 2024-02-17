import React, { createContext, useContext, useState } from "react";

const IDContext = createContext();

export const IDProvider = ({ children }) => {
  const [groupID, setGroupID] = useState(null);

  const setID = (newID) => {
    setGroupID(newID);
  };

  return (
    <IDContext.Provider value={{ groupID, setID }}>
      {children}
    </IDContext.Provider>
  );
};

export const useID = () => {
  return useContext(IDContext);
};
