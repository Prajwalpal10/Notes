import React, { useRef, useEffect, useState } from "react";
import styles from "./Create.module.css";
import { useGroup } from "../../context/Group";
import { useID } from "../../context/IDContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = ({ onClose }) => {
  const containerRef = useRef();
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const { updateGroupData } = useGroup();
  const { setID } = useID();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const generateRandomId = () => {
    return Math.random().toString(36).substring(2, 9);
  };

  const handleCreate = async () => {
    const existingGroupsJSON = localStorage.getItem("groups");
    const existingGroups = existingGroupsJSON
      ? JSON.parse(existingGroupsJSON)
      : [];

    const isDuplicate = existingGroups.some(
      (group) => group.groupName === groupName
    );

    if (isDuplicate) {
      toast.error("Group with the same name already exists!");
      return;
    }
    const randomId = generateRandomId();
    const newGroup = {
      id: randomId,
      groupName: groupName,
      selectedColor: selectedColor,
    };
    setID(randomId);
    const updatedGroup = [...existingGroups, newGroup];
    localStorage.setItem("groups", JSON.stringify(updatedGroup));
    updateGroupData(updatedGroup);
    onClose();
  };

  const handleInputChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <h3>Create New group</h3>
      <div className={styles.grp_name}>
        <label htmlFor="groupName">Group Name</label>
        <input
          id="groupName"
          type="text"
          placeholder="Enter group name"
          value={groupName}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.choose_color}>
        <p>Choose colour</p>
        <ul>
          <li
            onClick={() => handleColorClick("#b38bfa")}
            style={{
              boxShadow:
                selectedColor === "#b38bfa"
                  ? "0 0 10px rgba(64, 64, 64, 1)"
                  : "none",
            }}
          ></li>
          <li
            onClick={() => handleColorClick("#ff79f2")}
            style={{
              boxShadow:
                selectedColor === "#ff79f2"
                  ? "0 0 10px rgba(64, 64, 64, 1)"
                  : "none",
            }}
          ></li>
          <li
            onClick={() => handleColorClick("#43e6fc")}
            style={{
              boxShadow:
                selectedColor === "#43e6fc"
                  ? "0 0 10px rgba(64, 64, 64, 1)"
                  : "none",
            }}
          ></li>
          <li
            onClick={() => handleColorClick("#f19576")}
            style={{
              boxShadow:
                selectedColor === "#f19576"
                  ? "0 0 10px rgba(64, 64, 64, 1)"
                  : "none",
            }}
          ></li>
          <li
            onClick={() => handleColorClick("#0047ff")}
            style={{
              boxShadow:
                selectedColor === "#0047ff"
                  ? "0 0 10px rgba(64, 64, 64, 1)"
                  : "none",
            }}
          ></li>
          <li
            onClick={() => handleColorClick("#6691ff")}
            style={{
              boxShadow:
                selectedColor === "#6691ff"
                  ? "0 0 10px rgba(64, 64, 64, 1)"
                  : "none",
            }}
          ></li>
        </ul>
      </div>
      <button
        onClick={handleCreate}
        disabled={!groupName.trim() || !selectedColor}
      >
        Create
      </button>
    </div>
  );
};

export default Create;
