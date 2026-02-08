import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

/**
 * Reusable mouse parallax hook
 *
 * @param {Object} config
 * @param {number} config.strength - maksymalne przesunięcie w px
 * @param {number} config.damping - tłumienie sprężyny
 * @param {number} config.stiffness - twardość sprężyny
 * @param {number} config.mass - masa sprężyny
 */

export const useMouseParallax = (config = {}) => {
  const { strength = 30, damping = 25, stiffness = 120, mass = 1 } = config;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { damping, stiffness, mass });
  const y = useSpring(mouseY, { damping, stiffness, mass });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const normalizedX = (e.clientX / innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / innerHeight) * 2 - 1;

      mouseX.set(normalizedX * strength);
      mouseY.set(normalizedY * strength);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, strength]);

  return { x, y };
};
