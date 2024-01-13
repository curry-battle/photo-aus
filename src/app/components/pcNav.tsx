import { css } from "../../../styled-system/css";
import Link from "next/link";
import { Day } from "./nav";

const styles = {
  nav: css({
    marginTop: "16px",
    display: "flex",
    gap: "0 32px",
  }),
  navLink: css({
    color: "#6F6F6F",
    display: "inline",
  }),
  current: css({
    color: "#bbb",
  }),
};

export default function PcNav({ current }: { current: string }) {
  return (
    <>
      <ul className={styles.nav}>
        {Object.values(Day).map((day, index) => (
          <li key={index} className={styles.navLink}>
            {day.toLowerCase() === current.toLowerCase() ? (
              <span className={styles.current}>{day}</span>
            ) : (
              <Link href={`/${day.toLowerCase()}`}>{day}</Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
