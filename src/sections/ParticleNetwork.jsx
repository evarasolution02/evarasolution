import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";

export default function ParticleNetwork() {
  const points = useRef();

  const { mouse } = useThree();

  const count = 2200;
  const nodeCount = 140;

  /* -------------------- MAIN PARTICLES -------------------- */

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    return arr;
  }, []);

  /* -------------------- NEURAL NODES -------------------- */

  const nodes = useMemo(() => {
    const arr = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }

    return arr;
  }, []);

  /* -------------------- ANIMATION -------------------- */

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (!points.current) return;

    // slow cinematic rotation
    points.current.rotation.y = t * 0.04;

    // mouse field influence (soft AI feel)
    const mx = mouse.x * 6;
    const my = mouse.y * 4;

    const pos = points.current.geometry.attributes.position.array;

    for (let i = 0; i < 200; i++) {
      const ix = i * 3;

      const dx = pos[ix] - mx;
      const dy = pos[ix + 1] - my;

      const d = Math.sqrt(dx * dx + dy * dy);

      if (d < 3) {
        pos[ix] += dx * 0.002;
        pos[ix + 1] += dy * 0.002;
      }
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  /* -------------------- RENDER -------------------- */

  return (
    <>
      {/* 🌌 MAIN PARTICLE FIELD */}
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={count}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          size={0.02}
          color="#7A1734"
          transparent
          opacity={0.9}
          depthWrite={false}
        />
      </points>

      {/* 🧠 NEURAL NODES */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={nodes}
            count={nodeCount}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          size={0.04}
          color="rgba(0, 170, 255, 0.2)"
          transparent
          opacity={0.7}
          depthWrite={false}
        />
      </points>
    </>
  );
}