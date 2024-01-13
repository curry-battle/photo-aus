import { css } from "../../styled-system/css";
import Image from "next/image";

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
      <Image src="/404.png" width={300} height={300} alt="" />
    </div>
  );
}
