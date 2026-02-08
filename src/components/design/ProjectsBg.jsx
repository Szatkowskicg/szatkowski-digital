"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const barsConfig = [
  { color: "bg-pink-500", speed: 20, initialX: 0 }, // różowy
  { color: "bg-green-500", speed: 15, initialX: 0 }, // zielony
];

export default function ProjectBg() {
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none blur-[100px] -z-10">
      {barsConfig.map((bar, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        const rotation = (mouseX / window.innerWidth - 0.5) * 15;

        return (
          <motion.div
            key={index}
            className={`absolute top-[${
              index * 20
            }%] h-8 w-[150%] rounded-full ${bar.color}`}
            animate={{
              x: [
                -window.innerWidth * 0.75 * direction,
                window.innerWidth * 0.75 * direction,
              ],
              rotate: [rotation - 2, rotation + 2],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: bar.speed,
                ease: "linear",
              },
              rotate: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4,
                ease: "easeInOut",
              },
            }}
          />
        );
      })}
    </div>
  );
}
