"use client";

import { jetBrainsMono } from "styles/font";
import { css } from "../../../styled-system/css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const styles = {
  container: css({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  }),
  title: css({
    fontSize: "20px",
    fontWeight: 400,
  }),
  image: css({
    marginTop: "32px",
  }),
  hr: css({
    marginTop: "104px",
    marginBottom: "80px",
    width: "95%",
    height: "1px",
  }),
};
export default function DayHeader({
  title,
  imagePath,
}: {
  title: string;
  imagePath: string;
}) {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [title],
      typeSpeed: 30,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <span
          className={`${styles.title} ${jetBrainsMono.className}`}
          ref={el}
        />
        <Image
          src={imagePath}
          className={styles.image}
          width={976}
          height={549}
          alt=""
        />
        <hr className={styles.hr} />
      </div>
    </>
  );
}
