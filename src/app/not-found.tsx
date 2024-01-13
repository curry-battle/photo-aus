import { css } from "../../styled-system/css";
import { BASE_PATH } from "env";

const styles = {
  container: css({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "160px",
    fontWeight: "bold",
  }),
};
export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2>404</h2>
      <img src={`${BASE_PATH}/404.png`} width={300} height={300} alt="" />
    </div>
  );
}
