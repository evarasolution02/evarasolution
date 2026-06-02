import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Grid() {
  const ref = useRef();

  useFrame(() => {
    ref.current.position.z += 0.02;
    if (ref.current.position.z > 5) {
      ref.current.position.z = 0;
    }
  });

  return (
    <gridHelper
      ref={ref}
      args={[20, 20, "#1a3a5f", "#1a3a5f"]}
      rotation={[Math.PI / 2, 0, 0]}
    />
  );
}

function FloatingPanel({ position }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (!ref.current) return;

    ref.current.rotation.y = Math.sin(clock.elapsedTime) * 0.2;
    ref.current.position.y += Math.sin(clock.elapsedTime * 0.5) * 0.002;
  });

  return (
    <mesh ref={ref} position={position}>
      <planeGeometry args={[2.5, 1.5]} />
      <meshBasicMaterial
        color="#00aaff"
        transparent
        opacity={0.08}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Particles() {
  const ref = useRef();
  const count = 300;

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.0005;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#00ccff" />
    </points>
  );
}

export default function DataBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <color attach="background" args={["#020617"]} />

      <ambientLight intensity={0.5} />

      <Grid />
      <Particles />

      {/* FLOATING GLASS PANELS */}
      <FloatingPanel position={[0, 0, 0]} />
      <FloatingPanel position={[2, 1, -1]} />
      <FloatingPanel position={[-2, -1, -2]} />
    </Canvas>
  );
}