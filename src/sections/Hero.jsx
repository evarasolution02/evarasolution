import { motion } from "framer-motion";
import CodeRuntime from "./CodeRuntime";
import SystemBackground from "./SystemBackground";
import { useEffect, useState } from "react";

const words = [
  "AI Systems",
  "Scalable Platforms",
  "Digital Infrastructure",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="god-container" id="home">

      {/* Background */}
      <div className="bg-layer" />

      {/* System Background */}
      <div className="system-bg">
        <SystemBackground />
      </div>

      {/* Glow */}
      <div className="hero-glow" />

      {/* Runtime */}
      <div className="runtime-layer">
        <CodeRuntime />
      </div>

      {/* Content */}
      <div className="hero-ui center">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-light">We Build</span>
          <br />
          <span className="text-brand">Digital Systems</span>
          <br />
          <span className="text-outline">That Scale Quietly.</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          Engineered with clarity.
  
          Designed to last.
          
          Built for people who move fast.
        </motion.p>

        <motion.div className="actions">
  <button
    className="btn-primary"
    onClick={() => {
      document
        .getElementById("work")
        ?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Explore Work
  </button>

  <button
    className="btn-secondary"
    onClick={() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Start a Project
  </button>
</motion.div>
      </div>
    </section>
  );
}