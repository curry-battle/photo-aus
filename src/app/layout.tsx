"use client";

import "../styles/global.css";

// font awesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "../../styled-system/css";
import { bizUdGothic, jetBrainsMono } from "styles/font";
import Nav from "./components/nav";

const styles = {
  body: css({
    maxWidth: "1024px",
    padding: "24px",
    margin: "0px auto",
  }),
  siteTitle: css({
    fontSize: "32px",
    fontWeight: 400,
  }),
  main: css({
    marginTop: "80px",
    marginBottom: "80px",
  }),
  footer: css({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  }),
  nextLink: css({
    padding: "0.5em 1em",
    fontWeight: "bold",
    border: "solid 2px #333333",
  }),
  footerTitle: css({
    marginTop: "40px",
  }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 適当でダサいけど面倒くさいからもういいや
  const match = pathname.match(/\/day([1-8])\//);
  const isError = !match;
  console.log(match);
  const currentDayNum = isError ? undefined : Number(match[1]);
  const currentDayPath = isError ? undefined : `day${currentDayNum}`;
  const isLastDay = currentDayNum === 8;
  const nextDayPath = isLastDay ? undefined : `day${currentDayNum + 1}`;

  return (
    <html lang="en">
      <head>
        <title>In Australia</title>
        <meta name="robots" content="noindex,nofollow" />
      </head>
      <body
        className={`${styles.body} ${jetBrainsMono.className} ${bizUdGothic.className}`}
      >
        <header>
          <h1 className={`${styles.siteTitle} ${jetBrainsMono.className}`}>
            <Link href="/">In Australia</Link>
          </h1>
          {!isError && <Nav current={currentDayPath} />}
        </header>

        <main className={styles.main}>{children}</main>

        {!isError && (
          <footer className={styles.footer}>
            {nextDayPath && (
              <div className={styles.nextLink}>
                <Link href={`/${nextDayPath}`}>→ Go to The Next Day</Link>
              </div>
            )}
            {!nextDayPath && (
              <div className={styles.nextLink}>
                <p>Thanks For Watching!</p>
              </div>
            )}
            <p
              className={`${styles.siteTitle} ${styles.footerTitle} ${jetBrainsMono.className}`}
            >
              In Australia
            </p>
            <Nav current={currentDayPath} isFooter={true} />
          </footer>
        )}
      </body>
    </html>
  );
}
