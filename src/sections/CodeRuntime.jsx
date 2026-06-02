import { useState, useEffect } from "react";

export default function CodeRuntime() {
  const steps = [
    { text: "Connecting to database...", type: "normal" },
    { text: "Error: Connection timeout ❌", type: "error" },
    { text: "Retrying connection...", type: "normal" },
    { text: "Optimizing query...", type: "normal" },
    { text: "Connected successfully ✅", type: "success" }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((prev) => (prev + 1) % steps.length);
    }, 1800);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="runtime-layer">
      <div className="runtime-box">
        <div className="runtime-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>

        <div className={`runtime-text ${steps[index].type}`}>
          {steps[index].text}
        </div>
      </div>
    </div>
  );
}