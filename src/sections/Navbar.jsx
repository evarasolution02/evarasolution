import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const glowRef = useRef();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse move glow (LOGO AURA FOLLOW)
  useEffect(() => {
    const moveGlow = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      glowRef.current.style.transform = `translate(${x - 100}px, ${y - 100}px)`;
    };

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* GLOBAL GLOW */}
      <div ref={glowRef} className="cursor-glow"></div>

      <div className="nav-container">
        {/* LOGO */}
        <div
          className="logo-wrapper"
          onClick={() => (window.location.href = "/")}
        >
          <img src={logo} alt="Evara" className="logo-img" />
        </div>

        {/* MENU */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#service">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About Us</a>
          <a href="#process">Our Process</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* MAGNETIC BUTTON */}
        <MagneticButton />
      </div>
    </header>
  );
}

/* =========================
   MAGNETIC BUTTON COMPONENT
========================= */

function MagneticButton() {
  const btnRef = useRef();

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btnRef.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const reset = () => {
    btnRef.current.style.transform = "translate(0,0)";
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="nav-btn"
      onClick={() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <span>Start Project</span>
    </button>
  );
}
