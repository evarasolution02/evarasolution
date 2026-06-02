import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/* ================= GRID FLOOR ================= */
function MovingGrid() {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    ref.current.position.z += 0.05;
    if (ref.current.position.z > 10) {
      ref.current.position.z = 0;
    }
  });

  return (
    <gridHelper
      ref={ref}
      args={[40, 40, "#0ea5e9", "#0ea5e9"]}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, -2, 0]}
    />
  );
}

/* ================= PARTICLES ================= */
function Particles() {
  const ref = useRef();
  const count = 500;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.0008;
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
      <pointsMaterial size={0.04} color="#38bdf8" />
    </points>
  );
}

/* ================= HOLOGRAM PANELS ================= */
function Panel({ position }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (!ref.current) return;

    ref.current.rotation.y = Math.sin(clock.elapsedTime * 0.5) * 0.2;
    ref.current.position.y += Math.sin(clock.elapsedTime) * 0.002;
  });

  return (
    <mesh ref={ref} position={position}>
      <planeGeometry args={[3, 1.8]} />
      <meshBasicMaterial
        color="#0ea5e9"
        transparent
        opacity={0.08}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ================= DATA FLOW LINES ================= */
function DataLines() {
  const lines = [];

  for (let i = 0; i < 20; i++) {
    const points = [
      new THREE.Vector3(-5, Math.random() * 3, -5),
      new THREE.Vector3(5, Math.random() * 3, 5),
    ];

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    lines.push(
      <line key={i} geometry={geometry}>
        <lineBasicMaterial color="#0ea5e9" transparent opacity={0.2} />
      </line>
    );
  }

  return <group>{lines}</group>;
}

/* ================= MAIN ================= */
export default function CinematicScene() {
  return (
    <Canvas camera={{ position: [0, 1, 8], fov: 60 }}>
      <color attach="background" args={["#020617"]} />

      {/* LIGHT */}
      <ambientLight intensity={0.5} />

      {/* FOG = CINEMATIC DEPTH */}
      <fog attach="fog" args={["#020617", 5, 20]} />

      <MovingGrid />
      <Particles />
      <DataLines />

      {/* FLOATING PANELS */}
      <Panel position={[0, 1, 0]} />
      <Panel position={[3, 2, -2]} />
      <Panel position={[-3, 1, -3]} />

      {/* BLOOM EFFECT 🔥 */}
      <EffectComposer>
        <Bloom intensity={1.2} luminanceThreshold={0.2} />
      </EffectComposer>

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}