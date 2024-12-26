import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/assets/Environment-only.glb'); // Adjust the path if needed
  return <primitive object={scene} />;
};

const Environment = () => {
  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        position={[-2, 5, 3]}
        fov={60}
      />
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 20, 5]} intensity={1.3} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default Environment;
