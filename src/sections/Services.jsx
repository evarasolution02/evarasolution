import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Globe,
  Code2,
  Database,
  Smartphone,
  Megaphone,
  PenTool,
} from "lucide-react";

const services = [
  {
    title: "Shopify Development",
    desc: "We build high-converting Shopify stores that combine premium design, seamless user experiences, and optimized performance to help brands increase sales, customer retention, and long-term growth.",
    icon: ShoppingBag,
  },
  {
    title: "WordPress Development",
    desc: "From business websites to advanced content platforms, we create secure, scalable, and easy-to-manage WordPress solutions tailored to your brand and business objectives.",
    icon: Globe,
  },
  {
    title: "Frontend Development",
    desc: "Our frontend solutions focus on speed, responsiveness, and exceptional user experiences, ensuring every interaction feels smooth, engaging, and visually impressive across all devices.",
    icon: Code2,
  },
   {
  title: "UI/UX Design",
  desc: "We craft intuitive and visually stunning user experiences that blend aesthetics with functionality. Our UI/UX design process focuses on usability, user engagement, and creating seamless digital journeys that leave a lasting impression.",
  icon: PenTool,
},
  {
    title: "MERN Stack Development",
    desc: "We develop robust full-stack web applications using modern technologies, delivering scalable architectures, high performance, and reliable solutions for growing businesses.",
    icon: Database,
  },
  {
    title: "App Development",
    desc: "We design and develop mobile applications that deliver intuitive user experiences, powerful functionality, and long-term value for both startups and established businesses.",
    icon: Smartphone,
  },
  {
    title: "Digital Marketing",
    desc: "Our data-driven marketing strategies help businesses attract qualified leads, strengthen brand visibility, improve customer engagement, and achieve measurable growth.",
    icon: Megaphone,
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const ActiveIcon = services[active].icon;

  return (
    <section className="services-section" id="service">
      <div className="services-container">
        <span className="services-tag">PREMIUM SERVICES</span>

        <h2 className="services-heading">Digital Solutions</h2>

        <p className="services-subtitle">
          Building modern brands through strategy, design and development.
        </p>

        <div className="services-line" />

        <div className="services-nav">
          {services.map((service, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`service-tab ${active === i ? "active" : ""}`}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              <p>{service.title}</p>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="service-content"
          >
            <div className="icon-wrapper">
              <div className="orbit orbit1">
                <span className="dot dot1"></span>
              </div>

              <div className="orbit orbit2">
                <span className="dot dot2"></span>
              </div>

              <div className="orbit orbit3">
                <span className="dot dot3"></span>
              </div>

              <div className="ring ring1" />
              <div className="ring ring2" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 15,
                  ease: "linear",
                }}
                className="icon-box"
              >
                <ActiveIcon size={60} />
              </motion.div>
            </div>

            <h3>{services[active].title}</h3>

            <p>{services[active].desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
