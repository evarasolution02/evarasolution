import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import NeuralBackground from "./NeuralBackground";

/* ---------------- SCENES ---------------- */

const scenes = [
  [
    { text: "init()", color: "#7df9ff" },
    { text: "loading neural core modules...", color: "#f7b267" },
    { text: "done", color: "#c3f584" },
  ],
  [
    { text: "AI module activated", color: "#ff7d7d" },
    { text: "learning...", color: "#7df9ff" },
    { text: "pattern recognition stable", color: "#f7b267" },
  ],
  [
    { text: "nodes connecting...", color: "#c3f584" },
    { text: "synapses.build()", color: "#7df9ff" },
    { text: "ok", color: "#ff7d7d" },
  ],
  [
    { text: "fetch('/api/brain')", color: "#7df9ff" },
    { text: "response received", color: "#c3f584" },
    { text: "parsing data structure...", color: "#f7b267" },
    { text: "done", color: "#c3f584" },
  ],
  [
    { text: "const model = new AI()", color: "#7df9ff" },
    { text: "model.train()", color: "#f7b267" },
    { text: "loss ↓ 0.021", color: "#c3f584" },
  ],

  /* NEW */
  [
    { text: "system.boot()", color: "#7df9ff" },
    { text: "memory check...", color: "#f7b267" },
    { text: "stable", color: "#c3f584" },
  ],
  [
    { text: "database.sync()", color: "#7df9ff" },
    { text: "syncing...", color: "#f7b267" },
    { text: "completed", color: "#c3f584" },
  ],
  [
    { text: "render.engine()", color: "#7df9ff" },
    { text: "frame update", color: "#f7b267" },
    { text: "60fps", color: "#c3f584" },
  ],
];

/* ---------------- POSITIONS ---------------- */

const positions = [
  { top: "10%", left: "10%" },
  { top: "10%", left: "50%" },
  { top: "10%", left: "70%" },

  { top: "30%", left: "15%" },
  { top: "30%", left: "45%" },
  { top: "30%", left: "75%" },

  { top: "55%", left: "10%" },
  { top: "55%", left: "60%" },
  { top: "55%", left: "80%" },

  { top: "75%", left: "25%" },
  { top: "75%", left: "55%" },
];

/* ---------------- HERO ---------------- */

export default function VisionHero() {
  const [blocks, setBlocks] = useState([]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  /* 🖱️ PARALLAX */
  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* 🎬 FIXED ROTATION (NO REPEAT LOGIC) */
  useEffect(() => {
    let id = 0;
    let index = 0;
    let lastScene = -1;

    const getScene = () => {
      let next = Math.floor(Math.random() * scenes.length);

      // ❌ prevent same scene twice
      while (next === lastScene) {
        next = Math.floor(Math.random() * scenes.length);
      }

      lastScene = next;
      return scenes[next];
    };

    const spawn = () => {
      id++;

      const newBlock = {
        id,
        lines: getScene(),
        position: positions[index % positions.length],
        depth: 0.3 + Math.random() * 0.7,
      };

      index++;

      setBlocks((prev) => {
        const updated = [...prev, newBlock];

        // stable FIFO
        if (updated.length > 4) updated.shift();

        return updated;
      });
    };

    // initial fill
    for (let i = 0; i < 4; i++) spawn();

    const interval = setInterval(spawn, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="bg">
        <NeuralBackground />
      </div>

      <AnimatePresence>
        {blocks.map((block) => (
          <CodeBlock
            key={block.id}
            block={block}
            smoothX={smoothX}
            smoothY={smoothY}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- BLOCK ---------------- */

function CodeBlock({ block, smoothX, smoothY }) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    setVisibleLines(0);

    let time = 0;

    const timers = block.lines.map(() => {
      const delay = 250 + Math.random() * 250;
      time += delay;

      return setTimeout(() => {
        setVisibleLines((p) => p + 1);
      }, time);
    });

    return () => timers.forEach(clearTimeout);
  }, [block]);

  const top = parseFloat(block.position.top);
  const left = parseFloat(block.position.left);

  const dist = Math.sqrt((top - 50) ** 2 + (left - 50) ** 2);
  const factor = Math.min(dist / 50, 1);

  const opacity = 0.25 + factor * 0.35;
  const blur = 2 - factor * 1.2;

  return (
    <motion.div
      className="block"
      style={{
        ...block.position,
        transform: `translate(${smoothX.get() * block.depth}px, ${smoothY.get() * block.depth}px) scale(${0.9 + block.depth * 0.2})`,
        zIndex: Math.floor(block.depth * 100),
        opacity,
        filter: `blur(${blur}px)`,
      }}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      <div className="code">
        {block.lines.map((line, i) => (
          <div key={i} className="line" style={{ color: line.color }}>
            {i < visibleLines && line.text}
          </div>
        ))}
      </div>
    </motion.div>
  );
}