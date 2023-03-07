// import * as THREE from 'three'
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useFBX } from '@react-three/drei';
import CanvasLoader from '../CanvasLoader';

const Dummy = (props) => {
  const dummy = useFBX('Walking.fbx');
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={dummy} position={[0, -9.45, -1.5]} scale={0.13} />
    </mesh>
  );
};
export const DummyCanvas = () => {
  return (
    <Canvas
      style={{ height: 600 }}
      frameloop="demand"
      shadows
      camera={{ position: [40, 100, 10], fov: 15 }}
      gl={{ preserveDrawing: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Dummy />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
