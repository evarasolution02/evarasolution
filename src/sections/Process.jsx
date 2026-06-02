import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand Your Business",
    description:
      "We deeply understand your business, goals, target audience, and vision before making strategic decisions.",
  },
  {
    number: "02",
    title: "Research & Explore",
    description:
      "We analyze competitors, market trends, and opportunities to identify the most effective path forward.",
  },
  {
    number: "03",
    title: "Strategic Planning",
    description:
      "A detailed roadmap is created to align design, functionality, and business objectives.",
  },
  {
    number: "04",
    title: "Design & Development",
    description:
      "We transform concepts into premium digital experiences using modern technologies and elegant design.",
  },
  {
    number: "05",
    title: "Testing & Refinement",
    description:
      "Every detail is tested, optimized, and refined to ensure a flawless user experience.",
  },
  {
    number: "06",
    title: "Launch & Growth",
    description:
      "We launch your project and continue supporting your growth through optimization and updates.",
  },
];

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-header">
        <span className="tag">OUR PROCESS</span>
        <h2>
          Our Proven <span>Process</span>
        </h2>
        <p>
          We follow a strategic client-first approach to deliver digital
          experiences that are beautiful, functional, and results-driven.
        </p>
      </div>

      <div className="timeline">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`timeline-row ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            {/* CARD */}
            <motion.div
              className="timeline-card"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -120 : 120,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>

            {/* CENTER NUMBER */}
            <motion.div
              className="timeline-number"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              {step.number}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}