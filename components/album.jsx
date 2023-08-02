"use client";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./album.module.scss";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const Album = forwardRef(function Album(props, ref) {
//   const { release } = props;
//   const [releases, setReleases] = useState();
//   const revealRef = useRef();
//   const ref = useRef();

//   const fetchRelease = async () => {
//     const res = await axios.get(props.release.resource_url, {
//       params: {
//         token: process.env.NEXT_PUBLIC_DISCOG_TOKEN,
//       },
//     });
//     const { data } = await res;
//     setReleases(data.images[0].uri);
//   };

//   useEffect(() => {
//     fetchRelease();
//     const anim = gsap.fromTo(
//       ref,
//       { autoAlpha: 0, y: 50 },
//       { duration: 1, autoAlpha: 1, y: 0 }
//     );
//     ScrollTrigger.create({
//       trigger: ref,
//       animation: anim,
//       toggleActions: "play none none none",
//       once: true,
//     });
//   }, []);

//   return (
//     <li
//       ref={ref.current}
//       // onMouseEnter={() => mouseEnter()}
//       // onMouseLeave={() => mouseLeave()}
//     >
//       {release && (
//         <div className={styles.release}>
//           <h3>{release.artist}</h3>
//           <h3>{release.title}</h3>
//           {releases && (
//             <Image
//               src={releases}
//               // priority={true}
//               width={400}
//               height={400}
//               alt="Picture of the a release"
//             />
//           )}

//           <h3>{release.year}</h3>
//         </div>
//       )}
//     </li>
//   );
// });
const Album = (props) => {
  const ref = useRef(null);
  const [releases, setReleases] = useState();

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
    const anim = gsap.fromTo(
      ref,
      { autoAlpha: 0, y: 50 },
      { duration: 1, autoAlpha: 1, y: 0 }
    );
    // ScrollTrigger.create({
    //   trigger: ref,
    //   animation: anim,
    //   toggleActions: "play none none none",
    //   once: true,
    // });
  }, []);

  return <div ref={ref}>aaaaaaaaa</div>;
};
export default Album;
