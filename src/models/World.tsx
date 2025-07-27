import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";
import worldScene from "../assets/3d/ship_in_clouds.glb";
import { useFrame, useThree } from "@react-three/fiber";

export function World({
  setCurrentStage,
  setHasScrolled,
  ...props
}: {
  setCurrentStage: React.Dispatch<React.SetStateAction<number>>;
  setHasScrolled: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { nodes, materials } = useGLTF(worldScene);
  const { gl } = useThree();
  const worldRef = useRef<any>(null);
  const rotationSpeed = useRef(0);
  let dampingFactor = 0.955;
  const [isRotating, setIsRotating] = useState(false);

  const isMobile = () => false;
  if (isMobile()) dampingFactor = 0.7;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      worldRef.current.rotation.y += 0.009 * Math.PI;
      rotationSpeed.current = 0.0125;
    } else if (e.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      worldRef.current.rotation.y -= 0.009 * Math.PI;
      rotationSpeed.current = -0.0125;
    }
  };

  const handleKeyUp = () => setIsRotating(false);

  useFrame(() => {
    // Only handle rotation animation, no stage changes here
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      worldRef.current.rotation.y += rotationSpeed.current;
    }
  });

  // Helper function to update stage based on Z position
  const updateStageFromZoom = (zPosition: number) => {
    // console.log("Z Position:", zPosition);
    if (zPosition >= 100) {
      setHasScrolled(true);
    }
    // Define clear stage boundaries for 6 stages
    if (zPosition <= 200) {
      setCurrentStage(1);
    } else if (zPosition <= 450) {
      setCurrentStage(2);
    } else if (zPosition <= 700) {
      setCurrentStage(3);
    } else if (zPosition <= 950) {
      setCurrentStage(4);
    } else if (zPosition <= 1200) {
      setCurrentStage(5);
    } else {
      setCurrentStage(6);
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (worldRef.current) {
        const zoomAmount = e.deltaY * 0.08;
        const newZ = worldRef.current.position.z + zoomAmount;

        // Clamp Z position to stay in range [-50, 1600]
        worldRef.current.position.z = Math.min(Math.max(newZ, -30), 1600);

        // Update stage based on new zoom position
        updateStageFromZoom(worldRef.current.position.z);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("wheel", handleWheel, { passive: false });

    // Set initial stage based on initial position
    if (worldRef.current) {
      updateStageFromZoom(worldRef.current.position.z);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("wheel", handleWheel);
    };
  }, [gl]);

  return (
    <a.group ref={worldRef} position={[0, 0, -30]} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Boot_Finaal_1_Boot_Finaal_0.geometry}
        material={materials.Boot_Finaal}
        position={[7.534, -7.801, -688.476]}
        rotation={[0, -0.6, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cloud_Poly_Poly_0.geometry}
        material={materials.Poly}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cloud_1_Cloud_1_0.geometry}
        material={materials.Cloud_1}
        position={[-102.342, -152.023, -1209.99]}
        rotation={[1.917, 0.433, 0.911]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cloud_2_Cloud_2_0.geometry}
        material={materials.Cloud_2}
        position={[333.052, -63.933, -1541.733]}
        rotation={[-2.901, 0.214, -1.167]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cloud_3_Cloud_3_0.geometry}
        material={materials.Cloud_3}
        position={[339.375, -70.968, -1571.745]}
        rotation={[2.892, -1.308, 3.083]}
        scale={1.189}
      />
    </a.group>
  );
}
