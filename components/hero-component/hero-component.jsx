import React, { useLayoutEffect, useRef } from "react";
import styles from "./hero-component.module.scss";

const HeroComponent = () => {
  return (
    <div className={styles.hero}>
      <h1>
        <span>Petter-</span>
        <span>Kraft</span>
      </h1>
      <div className={styles.text}></div>
    </div>
  );
};

export default HeroComponent;
