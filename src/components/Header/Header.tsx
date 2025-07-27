import React from "react";
import styles from "./header.module.css";

export const Header: React.FC = () => {
  return (
    <div className={styles.headerBox}>
      <h2>Saurav Prasad</h2>
      <p className={styles.contactInfo}>
        📧 sauravprasad2050@gmail.com | 📞 +91 9064007452
      </p>
      <p className={styles.links}>
        <a
          href="https://github.com/saurav-prasad"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |
        <a
          href="https://linkedin.com/in/saurav-prassadd"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        |
        <a
          href="https://sauravprasad.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </p>
    </div>
  );
};
