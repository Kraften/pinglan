"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./album.module.scss";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { inconsolata } from "@/utils/font-loader";

gsap.registerPlugin(ScrollTrigger);

const Album = (props) => {
  const { release } = props;
  const [releases, setReleases] = useState();
  const revealRef = useRef();
  // const ref = useRef();

  const fetchRelease = async () => {
    const res = await axios.get(props.release.resource_url, {
      params: {
        token: process.env.NEXT_PUBLIC_DISCOG_TOKEN,
      },
    });

    const { data } = await res;
    setReleases(data.images[0].uri);
  };

  useEffect(() => {
    fetchRelease();
  }, []);

  return (
    <li>
      {release && (
        <div className={`${styles.release} ${inconsolata.className}`}>
          {releases && (
            <Image
              src={releases}
              // priority={true}
              width={400}
              height={400}
              alt="Picture of the a release"
            />
          )}
          {/* <Image
            alt="aa"
            width={500}
            height={500}
            src={"/../public/a.webp"}
            key={release.id}
          ></Image> */}
          <div className="flex-row">
            <h3>{release.artist}</h3> &nbsp; <p>{` / `}</p>&nbsp;
            <h3>{release.year}</h3>&nbsp;/&nbsp;<h3>{release.title}</h3>
          </div>
        </div>
      )}
    </li>
  );
};

export default Album;
