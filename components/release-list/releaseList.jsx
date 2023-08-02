"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Album from "../album";
import Image from "next/image";

import styles from "./release-list.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ReleaseList = () => {
  const [releases, setReleases] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const main = useRef([]);

  const fetchReleases = async () => {
    const res = await axios.get(
      "https://api.discogs.com/artists/4836659/releases",
      {
        params: {
          token: process.env.NEXT_PUBLIC_DISCOG_TOKEN,
        },
      }
    );
    const { data } = await res;
    setReleases(data.releases);

    console.log(
      "🚀 ~ file: releaseList.jsx:39 ~ main.current.forEach ~ main.current:",
      main.current
    );
  };

  useEffect(() => {
    fetchReleases();
    main.current.forEach((el) => {
      const anim = gsap.fromTo(
        el,
        { autoAlpha: 0, y: 50 },
        { duration: 1, autoAlpha: 1, y: 0 }
      );
      ScrollTrigger.create({
        trigger: el,
        animation: anim,
        toggleActions: "play none none none",
        once: true,
      });
    });
  }, []);
  useEffect(() => {}, []);
  const show = () => {
    setShowDialog(true);
  };
  const hide = () => {
    setShowDialog(false);
  };
  const addToRefs = (el) => {
    if (el && !main.current.includes(el)) {
      main.current.push(el);
    }
    // console.log(
    //   "🚀 ~ file: releaseList.jsx:45 ~ addToRefs ~ main.current:",
    //   main.current
    // );
  };
  return (
    <div className={styles.listWrapper}>
      <h1>Work</h1>
      <ul className={styles.releaseList}>
        {releases.map((release) => {
          return (
            // <Image
            //   alt="aa"
            //   width={150}
            //   height={150}
            //   src={release.thumb}
            //   ref={addToRefs}
            //   key={release.id}
            // ></Image>
            // <li key={release.id}>{release.title}</li>
            // <li key={release.id}>{release.title}</li>

            <Album
              key={release.id}
              {...release}
              ref={addToRefs}
              release={release}
              // mouseEnter={show}
              // mouseLeave={hide}
            ></Album>
          );
        })}
      </ul>
    </div>
  );
};

export default ReleaseList;
