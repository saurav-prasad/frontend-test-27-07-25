import React from "react";
import styles from "./toolbar.module.css";

export const Toolbar: React.FC = () => {
  return (
    <div className={styles.toolbar}>
      <span>Scroll to see the magic 🪄</span>
      <div className={styles.arrow}></div>
    </div>
  );
};
