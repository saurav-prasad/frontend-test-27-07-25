import { Html } from "@react-three/drei";
import classes from "./loader.module.css";
const Loader = () => {
  return (
    <Html>
      <span className={classes.loader}></span>;
    </Html>
  );
};

export default Loader;
