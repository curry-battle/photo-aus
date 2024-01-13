import Image from "next/image";
import { css } from "../../../styled-system/css";

const styles = {
  container: css({
    display: "flex",
    alignItems: "center",
  }),
  image: css({
    objectFit: "contain",
    width: 976,
    maxHeight: 649,
  }),
};
export default function DayImage({
  imagePath,
  isFirst = false,
}: {
  imagePath: string;
  isFirst?: boolean;
}) {
  const marginTop = css(
    !isFirst && {
      base: {
        marginTop: "64px",
      },
      smDown: {
        marginTop: "32px",
      },
    }
  );

  return (
    <>
      <div className={`${styles.container} ${marginTop}`}>
        <Image
          src={imagePath}
          className={styles.image}
          width={976}
          height={649}
          alt=""
        />
      </div>
    </>
  );
}
