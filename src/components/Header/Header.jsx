import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { getInitials } from "../../Utils/Utils";
import backIcon from "../../assets/Vector2.png";
import { useID } from "../../context/IDContext";

const Header = ({ id }) => {
  const [groupData, setGroupData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { setID } = useID();

  useEffect(() => {
    const storedDataJSON = localStorage.getItem("groups");
    const storedData = storedDataJSON ? JSON.parse(storedDataJSON) : [];
    const user = storedData.find((user) => user.id === id);
    setGroupData(user);
    setIsLoading(false);
  }, [id]);

  const IconStyle = {
    backgroundColor: groupData ? groupData.selectedColor : "#0047FF",
  };

  const handleClick = () => {
    setID(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={handleClick}>
        {id && <img src={backIcon} alt="Back" />}
      </div>
      <div className={styles.icon} style={IconStyle}>
        {isLoading
          ? "Loading..."
          : groupData
          ? getInitials(groupData.groupName)
          : "MN"}
      </div>
      <div className={styles.grpName}>
        {isLoading
          ? "Loading..."
          : groupData
          ? groupData.groupName
          : "Loading..."}
      </div>
    </div>
  );
};

export default Header;
