import { css } from "../../../styled-system/css";
import Link from "next/link";
import { Day } from "./nav";
import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
  container: css({
    position: "fixed",
    top: "24px",
    right: "24px",

    display: "flex",
    justifyContent: "flex-end",
  }),

  navbarBurger: css({
    position: "relative",
    zIndex: "30",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    color: "#4a4a4a",
    cursor: "pointer",
    height: "42px",
    width: "42px",

    "&:hover": {
      backgroundColor: "#e1e1e1",
    },
  }),
  nav: css({
    right: "0px",
    position: "absolute",
    backgroundColor: "#fff",
    boxShadow: "0 8px 16px rgba(10, 10, 10, 0.1)",
    paddingTop: "42px",
  }),
  navLink: css({
    cursor: "pointer",
    color: "#4a4a4a",
    "&:hover": {
      backgroundColor: "#e1e1e1",
    },
    position: "relative",
  }),
  liChild: css({
    padding: "0.5rem 2.75rem",
    display: "block",
    height: "100%",
    width: "100%",
  }),
  current: css({
    color: "#bbb",
  }),
};

export default function SpNav({ current }: { current: string }) {
  const [navBarIsActive, setNavBarIsActive] = useState(false);

  const toggleNavBar = () => {
    setNavBarIsActive((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbarBurger} onClick={toggleNavBar}>
          {!navBarIsActive && <FontAwesomeIcon icon={faBars} size="lg" />}
          {navBarIsActive && <FontAwesomeIcon icon={faTimes} size="lg" />}
        </div>
        {navBarIsActive && (
          <ul className={styles.nav}>
            {Object.values(Day).map((day, index) => (
              <li key={index} className={styles.navLink}>
                {day.toLowerCase() === current.toLowerCase() ? (
                  <span className={`${styles.current} ${styles.liChild}`}>
                    {day}
                  </span>
                ) : (
                  <Link
                    onClick={toggleNavBar}
                    className={styles.liChild}
                    href={`/${day.toLowerCase()}`}
                  >
                    {day}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
