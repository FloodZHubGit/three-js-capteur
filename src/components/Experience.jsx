import { OrbitControls } from "@react-three/drei";
import { Capteur } from "./Capteur";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight position={[0, 100, 0]} />
      <directionalLight position={[0, 0, 100]} />
      <directionalLight position={[0, 0, -100]} />
      <directionalLight position={[100, 0, 0]} />

      <group
        scale={[0.08, 0.08, 0.08]}
        rotation={[0, Math.PI / 2, 0]}
        position={[0, -1, -1]}
      >
        <Capteur />
      </group>
    </>
  );
};
