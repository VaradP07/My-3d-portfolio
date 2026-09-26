import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleMouseOver = (event) => {
      const target = event.target;

      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".skill-card") ||
        target.closest(".project-card") ||
        target.closest(".contact-card")
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Center dot */}
      <div
        className="custom-cursor-dot"
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="custom-cursor-ring"
        animate={{
          left: position.x,
          top: position.y,
          width: hovering ? 55 : 35,
          height: hovering ? 55 : 35,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.4,
        }}
      />
    </>
  );
}

export default Cursor;