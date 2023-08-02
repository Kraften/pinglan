"use client";
import HeroComponent from "@/components/hero-component/hero-component";
import styles from "./page.module.scss";
import ReleaseList from "@/components/release-list/releaseList";
import React from "react";
import HeaderMenu from "@/components/header-menu/header-menu";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderMenu></HeaderMenu>
      <HeroComponent></HeroComponent>
      <ReleaseList></ReleaseList>
    </main>
  );
}
