import { css } from "../../../styled-system/css";

const styles = {
  textContainer: css({
    display: "block",

    base: {
      marginTop: "32px",
    },
    smDown: {
      marginTop: "16px",
    },

    "& p": {
      textAlign: "left",
      wordBreak: "autophrase",

      base: {
        fontSize: "16px",
        lineHeight: "32px",
      },
      smDown: {
        fontSize: "12px",
        lineHeight: "24px",
      },
    },
  }),
};
export default function DayText({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.textContainer}>
        <p>{children}</p>
      </div>
    </>
  );
}
