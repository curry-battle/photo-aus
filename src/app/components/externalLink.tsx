import { css } from "../../../styled-system/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const styles = {
  block: css({
    display: "block",
  }),
  link: css({
    textDecoration: "underline",
    marginRight: "3px",
  }),
};
export default function ExternalLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <>
      <span className={styles.block}>
        ・
        <a className={styles.link} href={href} target="_blank" rel="noopener">
          {text}
        </a>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
      </span>
    </>
  );
}
