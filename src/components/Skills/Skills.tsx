import React from "react";
import styles from "./skills.module.css";

export const Skills: React.FC = () => {
  return (
    <div className={styles.skillsBox}>
      <h2>💻 Skills</h2>
      <p>
        <strong>Languages:</strong> JavaScript, HTML, CSS
      </p>
      <p>
        <strong>Database:</strong> MongoDB, NoSQL
      </p>
      <p>
        <strong>Frameworks & Libraries:</strong> MERN, ReactJS, ExpressJS,
        NodeJS, Tailwindcss, Bootstrap, Redux, Axios, Socketio, ThreeJS
      </p>
    </div>
  );
};
