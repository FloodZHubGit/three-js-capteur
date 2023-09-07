import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [8, 5, 8], fov: 30 }}>
      <color attach="background" args={["#bacede"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
