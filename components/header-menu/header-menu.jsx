import React from "react";
import styles from "./header-menu.module.scss";
import { montserrat_medium } from "@/utils/font-loader";

const HeaderMenu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <h1>Petter Kraft</h1>
        <ul className={styles.menuList}>
          <li>
            <h3 className={montserrat_medium.className}>Home</h3>
          </li>
          <li>
            <h3 className={montserrat_medium.className}>Work</h3>
          </li>
          <li>
            <h3 className={montserrat_medium.className}>Videos</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
