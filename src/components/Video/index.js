import React from "react";
import styles from "./Video.module.css";
import siri from "assets/video/siri-movie.mp4";

const Video = () => (
  <div className={styles.container}>
    <video width="100%" height="100%" controls muted loop autoPlay>
      <source src={siri} type="video/mp4" />
    </video>
  </div>
);

export default Video;
