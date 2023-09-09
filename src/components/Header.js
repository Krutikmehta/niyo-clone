import React from "react";
import styles from "./styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={"images/logo.svg"}></img>
      </div>
      <div>Home</div>
      <div>Niyo Global</div>

      <div>Niyo for Students</div>
      <div className={styles.divWithChevron}>
        <div>Niyo Buzz</div>
        <svg
          className={styles.chevron}
          viewBox="0 0 320 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
        </svg>
      </div>

      <div className={styles.divWithChevron}>
        <div>All about Niyo</div>
        <svg
          className={styles.chevron}
          viewBox="0 0 320 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
        </svg>
      </div>
      <div className={styles.downloadContainer}>
        <div>Download</div>
      </div>
    </div>
  );
}
