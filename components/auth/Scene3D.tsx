"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import MathSphere from "./MathSphere";

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <fog attach="fog" args={["#050B18", 5, 15]} />

        <ambientLight intensity={0.6} />

        <pointLight
          position={[10, 10, 10]}
          intensity={10}
          color="#60A5FA"
        />

        <pointLight
          position={[-10, -10, -10]}
          intensity={8}
          color="#A855F7"
        />

        <MathSphere />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}