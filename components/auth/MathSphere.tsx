"use client";

import { Float, Text } from "@react-three/drei";

const formulas = [
  { text: "π", position: [3, 1, 0] },
  { text: "∫", position: [-3, -1, 0] },
  { text: "∑", position: [0, 3, 0] },
  { text: "f(x)", position: [0, -3, 0] },
  { text: "√x", position: [2, -2, 1] },
  { text: "e^(iπ)+1=0", position: [-2, 2, -1] },
];

export default function MathSphere() {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh>
          <sphereGeometry args={[1.8, 64, 64]} />

          <meshStandardMaterial
            color="#6366F1"
            emissive="#7C3AED"
            emissiveIntensity={2}
            wireframe
          />
        </mesh>
      </Float>

      {formulas.map((formula, index) => (
        <Float
          key={index}
          speed={1.5}
          rotationIntensity={2}
          floatIntensity={3}
        >
          <Text
            position={
              formula.position as [number, number, number]
            }
            fontSize={0.4}
            color="#67E8F9"
          >
            {formula.text}
          </Text>
        </Float>
      ))}
    </>
  );
}