import React, { useState } from "react";
import Group from "../Group/group";
import styles from "./groups.module.css";
import Create from "../Create_Group/Create";
import { GroupProvider } from "../../context/Group";

const Groups = () => {
  const [showCreate, setShowCreate] = useState(false);

  const addGroups = () => {
    setShowCreate(true);
  };

  const closeCreate = () => {
    setShowCreate(false);
  };

  return (
    <GroupProvider>
      <div
        className={`${styles.container} ${
          window.innerWidth < 768 ? styles.groupContainerHidden : ""
        }`}
      >
        <h2>Pocket Notes</h2>
        <div className={styles.grp}>
          <Group />
        </div>
        <button className={styles.addGroups} onClick={addGroups}>
          +
        </button>

        {showCreate && (
          <div className={styles.overlay}>
            <Create onClose={closeCreate} />
          </div>
        )}
      </div>
    </GroupProvider>
  );
};

export default Groups;
