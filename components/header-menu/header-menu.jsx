import React from "react";
import styles from "./header-menu.module.scss";
import { superFont } from "@/utils/font-loader";

const HeaderMenu = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={superFont.className}>Petter Kraft</h1>
      <ul className={styles.menuList}>
        <li>
          <h3>Home</h3>
        </li>
        <li>
          <h3>Work</h3>
        </li>
        <li>
          <h3>Videos</h3>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
