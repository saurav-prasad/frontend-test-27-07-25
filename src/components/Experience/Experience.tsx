import React from "react";
import styles from "./experience.module.css";

export const Experience: React.FC = () => {
  return (
    <div className={styles.experienceBox}>
      <h2>🏢 Professional Experience</h2>
      <div className={styles.jobDetails}>
        <p className={styles.jobTitle}>
          Software Development Engineer Intern
          <span>(Feb 2025 - Present)</span>
        </p>
        <strong className={styles.companyName}>HireHunch</strong>
        <ul>
          <li>
            Contributed to developing and maintaining front-end features for a
            technical interview platform using React.js and TypeScript.
          </li>
          <li>
            Collaborated with the backend team to integrate REST APIs, improving
            data flow and application responsiveness.
          </li>
          <li>
            Assisted in debugging and resolving production issues, enhancing
            application stability and user experience.
          </li>
          <li>
            Participated in agile ceremonies, including sprint planning and
            daily stand-ups, to ensure timely delivery of features.
          </li>
        </ul>
      </div>
    </div>
  );
};
