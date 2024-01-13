import { css } from "../../../styled-system/css";
import Link from "next/link";
import PcNav from "./pcNav";
import SpNav from "./spNav";
import { faL } from "@fortawesome/free-solid-svg-icons";

const styles = {
  pcNav: css({
    base: {
      display: "block",
    },
    lgDown: {
      display: "none",
    },
  }),
  spNav: css({
    base: {
      display: "none",
    },
    lgDown: {
      display: "block",
    },
  }),
};

export const Day = {
  Day1: "Day1",
  Day2: "Day2",
  Day3: "Day3",
  Day4: "Day4",
  Day5: "Day5",
  Day6: "Day6",
  Day7: "Day7",
  Day8: "Day8",
} as const;

export default function Nav({
  current,
  isFooter = false,
}: {
  current: string;
  isFooter?: boolean;
}) {
  return (
    <>
      <nav>
        <div className={styles.pcNav}>
          <PcNav current={current} />
        </div>
        {!isFooter && (
          <div className={styles.spNav}>
            <SpNav current={current} />
          </div>
        )}
      </nav>
    </>
  );
}
