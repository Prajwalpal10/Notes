import React from "react";
import styles from "./Banner.module.css";
import BannerImg from "../../assets/image-removebg-preview 1.png";
import lock from "../../assets/Vector.png";

const Banner = () => {
  // Preload images
  React.useEffect(() => {
    const image1 = new Image();
    image1.src = BannerImg;

    const image2 = new Image();
    image2.src = lock;
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.inBox}>
        <img src={BannerImg} alt="Banner Image" loading="lazy" />
        <h2>Pocket Notes</h2>
        <p>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <div className={styles.footer}>
        <img src={lock} alt="Lock Image" />
        <p>end-to-end encrypted</p>
      </div>
    </div>
  );
};

export default Banner;
