import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";

function Particles() {
  const points = useRef();

  const particleCount = 1200;

  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    points.current.rotation.y = t * 0.05;
    points.current.rotation.x = t * 0.02;

    // 🎥 cinematic camera
    state.camera.position.x = Math.sin(t * 0.2) * 0.5;
    state.camera.position.y = Math.cos(t * 0.2) * 0.5;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#7df9ff"
        transparent
        opacity={0.7}
      />
    </points>
  );
}

export default function NeuralBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <ambientLight intensity={0.5} />
      <Particles />
    </Canvas>
  );
}