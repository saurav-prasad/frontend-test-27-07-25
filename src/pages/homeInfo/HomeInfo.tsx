import React from "react";
import classes from "./homeInfo.module.css";
import { Header } from "../../components/Header/Header";
import { Project } from "../../components/Project/Project";
import { Education } from "../../components/Education/Education";
import { Skills } from "../../components/Skills/Skills";
import { Experience } from "../../components/Experience/Experience";

const HomeInfo = ({ currentStage }: { currentStage: number }) => {
  const renderedContent = React.useMemo(() => {
    switch (currentStage) {
      case 1:
        return (
          <h1 className={classes.heading}>
            Hi there 👋!, I'm Saurav
            <br />A self-taught Fullstack developer
          </h1>
        );
      case 2:
        return <Header />;
      case 3:
        return <Skills />;
      case 4:
        return <Experience />;
      case 5:
        return <Project />;
      case 6:
        return <Education />;
      default:
        return null;
    }
  }, [currentStage]);
  // console.log(currentStage);
  return <>{renderedContent};</>;
};

export default HomeInfo;
