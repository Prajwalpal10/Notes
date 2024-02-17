import React, { useState, useEffect } from "react";
import styles from "./group.module.css";
import { useGroup } from "../../context/Group";
import { useID } from "../../context/IDContext";
import { getInitials } from "../../Utils/Utils";

const Group = () => {
  const { groupData } = useGroup();
  const { groupID, setID } = useID();
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    setSelectedGroup(groupID);
  }, [groupID]);

  const handleClick = (id) => {
    setID(id);
    setSelectedGroup(id);
  };

  return (
    <div>
      {Object.values(groupData)?.map((data) => (
        <div
          key={data.id}
          onClick={() => handleClick(data.id)}
          className={`${styles.container} ${
            selectedGroup === data.id ? styles.selected : ""
          }`}
        >
          <div
            className={styles.icon}
            style={{ backgroundColor: data.selectedColor }}
          >
            {getInitials(data.groupName)}
          </div>
          <div className={styles.grpName}>{data.groupName}</div>
        </div>
      ))}
    </div>
  );
};

export default Group;
