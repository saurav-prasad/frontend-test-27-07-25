import React from "react";
import styles from "./project.module.css";

const projects = [
  {
    emoji: "🎨",
    title: "Pixl Play",
    subtitle: "Real-time collaboration App",
    techStack: "React.js, Node.js, Socket.io, Konva.js, Redux, JWT",
  },
  {
    emoji: "💬",
    title: "Chattila",
    subtitle: "Real-time messaging App",
    techStack: "MERN, Socket.io, Tailwind CSS, Redux, JWT",
  },
  {
    emoji: "🖼️",
    title: "Photo ki dukan",
    subtitle: "Photo Repository App",
    techStack: "Supabase, React.js, Redux, Emotion, React Infinite scrolling",
  },
  {
    emoji: "🌐",
    title: "Socioll",
    subtitle: "Social Media App",
    techStack: "MERN, Firebase, Redux, JWT, Material UI",
  },
  {
    emoji: "🛒",
    title: "Big Cart",
    subtitle: "E-commerce App",
    techStack: "React.js, Firebase, Razorpay, Tailwind CSS, Headless UI",
  },
];
export const Project: React.FC = () => {
  return (
    <div className={styles.projectsBox}>
      <h2>💼 Project Work</h2>
      {projects.map((project, index) => (
        <div key={index} className={styles.projectEntry}>
          <p className={styles.projectTitle}>
            {project.emoji} {project.title}
            <span>({project.subtitle})</span>
          </p>
          <p className={styles.techStack}>
            <strong>Tech:</strong> {project.techStack}
          </p>
        </div>
      ))}
    </div>
  );
};
