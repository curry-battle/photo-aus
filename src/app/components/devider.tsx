import { css } from "../../../styled-system/css";

const styles = {
  container: css({
    display: "flex",
    justifyContent: "center",
  }),
  hr: css({
    marginTop: "64px",
    width: "95%",
    height: "1px",
  }),
};
export default function Devider() {
  return (
    <div className={styles.container}>
      <hr className={styles.hr} />
    </div>
  );
}
