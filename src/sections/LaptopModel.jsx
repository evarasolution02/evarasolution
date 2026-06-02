import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function LaptopModel({ position }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (!ref.current) return;

    ref.current.rotation.y = Math.sin(clock.elapsedTime) * 0.3;
    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2;
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[2, 1.2, 0.1]} />
      <meshStandardMaterial color="#0f0f10" />
    </mesh>
  );
}