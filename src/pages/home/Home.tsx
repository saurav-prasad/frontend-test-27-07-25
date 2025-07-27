// Home.tsx
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { World } from "../../models/World";
import classes from "./home.module.css";
import HomeInfo from "../homeInfo/HomeInfo";
import { Toolbar } from "../../components/Toolbar/Toolbar";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  return (
    <div className={classes.container}>
      <div className={classes.homeInfo}>
        <HomeInfo currentStage={currentStage} />
      </div>
      {!hasScrolled && <Toolbar />}
      <Canvas camera={{ position: [0, 0, 20], near: 0.1, far: 1000 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[1, 1, 1]} intensity={0.85} />
        <hemisphereLight groundColor="#000000" intensity={1.1} />
        <Suspense fallback={<Loader />}>
          <World
            setHasScrolled={setHasScrolled}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
