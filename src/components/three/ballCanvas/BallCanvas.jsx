import { Float, useTexture, OrbitControls, Preload, Decal } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import CanvasLoader from '../CanvasLoader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={0.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.45}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} map={decal} 
        rotation={[2 * Math.PI, 0, 6.25]}
        flatShading
        />
      </mesh>
    </Float>
  );
};

export const BallCanvas = ({ icon }) => {
  return (
    <Canvas style={{ height: 50 }} frameloop="demand" gl={{ preserveDrawing: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
