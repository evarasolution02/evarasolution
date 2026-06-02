import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const planets = [
  { value: "15+", label: "Projects" },
  { value: "50+", label: "Clients" },
  { value: "5★", label: "Quality" },
];

export default function About() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 0.2);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative min-h-[120vh] flex items-center justify-center bg-[#050505] overflow-visible py-40 px-10 md:px-20">
      {" "}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[800px] h-[800px] bg-[#7A1734]/20 blur-[180px] rounded-full top-[-200px] left-1/2 -translate-x-1/2" />
      </div>
      {/* ✨ GRID */}
      <div className="absolute inset-0 opacity-[0.05] z-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      {/* 🪐 ORBIT SYSTEM */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/10 z-10">
        {" "}
        {planets.map((planet, i) => {
          const radius = 280; // ✅ reduced so it doesn't cut
          const currentAngle = angle + i * 120;

          const x = radius * Math.cos((currentAngle * Math.PI) / 180);
          const y = radius * Math.sin((currentAngle * Math.PI) / 180);

          return (
            <motion.div
              key={i}
              animate={{ rotate: angle + i * 120 }}
              transition={{ ease: "linear", duration: 0 }}
              className="absolute top-1/2 left-1/2"
              style={{
                transformOrigin: "0px 0px",
              }}
            >
              {/* distance from center */}
              <div
                style={{
                  transform: `translateX(280px)`,
                }}
              >
                {/* 🌍 PLANET */}
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#ff4d6d] to-[#7A1734] flex items-center justify-center text-center shadow-[0_0_80px_rgba(255,77,109,0.5)]">
                  <div className="absolute inset-0 rounded-full blur-2xl bg-[#ff4d6d]/40" />

                  <div className="relative z-10">
                    <h3 className="text-2xl text-white font-light">
                      {planet.value}
                    </h3>
                    <p className="text-xs text-white/70 mt-1 tracking-wider">
                      {planet.label}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* 🌟 CENTER CONTENT */}
      <div className="relative z-20 text-center max-w-3xl px-6">
        <p className="text-xs tracking-[0.5em] text-gray-500 uppercase">
          About Evara
        </p>

        <h2 className="mt-6 text-5xl md:text-7xl text-white leading-tight">
          Crafting{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A1734] to-[#ff4d6d]">
            digital luxury
          </span>
          <br />
          experiences that feel alive
        </h2>

        <p className="mt-8 text-gray-400 text-lg leading-relaxed">
          We build premium digital ecosystems that combine design, motion, and
          emotion to elevate brand perception.
        </p>
      </div>
    </section>
  );
}
