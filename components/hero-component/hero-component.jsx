import React from "react";
import styles from "./hero-component.module.scss";
import Image from "next/image";
import { montserrat_alternates_header } from "@/utils/font-loader";

const HeroComponent = () => {
  return (
    <div className={styles.hero}>
      <Image
        alt="aa"
        // fill
        width={1000}
        height={1000}
        src={"/../public/pingla.jpg"}
      ></Image>
      <h1 className={montserrat_alternates_header.className}>
        <span>Petter-</span>
        <span>Kraft</span>
      </h1>
      <div className={styles.text}></div>
    </div>
  );
};

export default HeroComponent;
