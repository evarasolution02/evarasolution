import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);
  const textRef = useRef(null);

  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let followerX = 0;
    let followerY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dotRef.current.style.transform =
        `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;

      followerRef.current.style.transform =
        `translate(${followerX}px, ${followerY}px)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  // 🔥 INTERACTIONS
  useEffect(() => {
    const elements = document.querySelectorAll("[data-cursor]");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const text = el.getAttribute("data-cursor");
        setCursorText(text);

        followerRef.current.classList.add("cursor-active");
      });

      el.addEventListener("mouseleave", () => {
        setCursorText("");
        followerRef.current.classList.remove("cursor-active");
      });
    });
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>

      <div ref={followerRef} className="cursor-follower">
        <span ref={textRef} className="cursor-text">
          {cursorText}
        </span>
      </div>
    </>
  );
}