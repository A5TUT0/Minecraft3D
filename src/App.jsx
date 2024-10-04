import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground.jsx";
import { FPV as Fpv } from "./components/FPV.jsx";
import { Player } from "./components/Player.jsx";
import { Cubes } from "./components/Cubes.jsx";
import { TextureSelector } from "./components/TextureSelect.jsx";
import { Menu } from "./components/Menu.jsx";
import { ControlsInfo } from "./components/ControlsInfo.jsx"; // Nueva importación

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Fpv />

        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className="pointer">+</div>
      <TextureSelector />
      <Menu />
      <ControlsInfo /> {/* Agregar la guía de controles aquí */}
    </>
  );
}

export default App;
