import React from "react";
import styles from "./education.module.css";

export const Education: React.FC = () => {
  return (
    <div className={styles.educationBox}>
      <h2>🎓 Education</h2>
      <p>
        <strong>Surya Sen College, Siliguri</strong>
      </p>
      <p>B.S.c Computer Science</p>
      <p className={styles.date}>Aug 2021 - Jun 2024</p>
    </div>
  );
};
