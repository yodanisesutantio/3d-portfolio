import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';

const Environment = () => {
  const { scene } = useGLTF('/assets/Environment-only.glb'); // Adjust the path if needed
  return <primitive object={scene} />;
};

// Component for the Cauldron
const Cauldron = () => {
  const { scene } = useGLTF('/assets/cauldron.glb'); // Adjust path as needed
  return (
    <primitive
      object={scene}
      position={[0, 0, 0]} // Set position relative to the Environment
    />
  );
};

// Component for the Blue Lantern
const BlueLantern = () => {
  const { scene } = useGLTF('/assets/Blue-Lantern.glb'); // Adjust path as needed
  return (
    <primitive
      object={scene}
      position={[0, 0, 0]} // Set position relative to the Environment
    />
  );
};

// Component for the Hanging Sign
const HangingSign = () => {
  const { scene } = useGLTF('/assets/Hanging-Sign.glb'); // Adjust path as needed
  return (
    <primitive
      object={scene}
      position={[0, 0, 0]} // Set position relative to the Environment
    />
  );
};

// Component for the Magic Wand
const MagicWand = () => {
  const { scene } = useGLTF('/assets/Magic-Wand.glb'); // Adjust path as needed
  return (
    <primitive
      object={scene}
      position={[0, 0, 0]} // Set position relative to the Environment
    />
  );
};

// Component for the Open Scrolls
const OpenScrolls = () => {
  const { scene } = useGLTF('/assets/Open-Scrolls.glb'); // Adjust path as needed
  return (
    <primitive
      object={scene}
      position={[0, 0, 0]} // Set position relative to the Environment
    />
  );
};

const Scene = () => {
  const cameraRef = useRef();

  // Adjust camera to focus on the Environment's center
  // useEffect(() => {
  //   if (cameraRef.current) {
  //     cameraRef.current.position.set(5, 5, 10); // Adjust the position
  //     cameraRef.current.lookAt(0, 7, 0);
  //   }
  // }, []);

  return (
    <Canvas>
      <PerspectiveCamera
        // ref={cameraRef}
        makeDefault
        position={[0, 5, 4]}
        fov={60}
      />
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 20, 5]} intensity={1.3} />
      <Environment />
      <Cauldron />
      <BlueLantern />
      <HangingSign />
      <MagicWand />
      <OpenScrolls />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
