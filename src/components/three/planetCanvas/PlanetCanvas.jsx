import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import CanvasLoader from './../CanvasLoader';

const Planet = () => {
  const planet = useGLTF('./planet/scene.gltf');
  return <primitive object={planet.scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const PlanetCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-3, 3, 6] }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Planet />
      </Suspense>
    </Canvas>
  );
};
export default PlanetCanvas;
