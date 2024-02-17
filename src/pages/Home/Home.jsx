// import React from "react";
import Groups from "../../components/Groups/groups";
import Banner from "../../components/Banner/Banner";
import styles from "./Home.module.css";
import Notes from "../../components/Notes/notes";
import { useID } from "../../context/IDContext";

const Home = () => {
  const { groupID } = useID();
  return (
    <div className={styles.container}>
      {groupID === null ? (
        <>
          <div className={styles.groups}>
            <Groups />
          </div>
          <div
            className={`${styles.banner} ${
              window.innerWidth < 600 ? styles.hidden : ""
            }`}
          >
            <Banner />
          </div>
        </>
      ) : (
        <>
          <div className={`${styles.groups1}`}>
            <Groups />
          </div>
          <div className={styles.banner1}>
            <Notes />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
