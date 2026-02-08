"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const springConfig = { stiffness: 200, damping: 25, mass: 0.8 };

const Card = ({ title, subtitle, icon: Icon }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);

  const springX = useSpring(rotateX, springConfig);
  const springY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-distant">
      <motion.div
        className="group relative w-68 h-80 rounded-2xl bg-n-8 hover:bg-primary-pink/5 border border-white/10 flex flex-col items-center justify-center p-6 overflow-hidden will-change-transform"
        style={{
          rotateX: springX,
          rotateY: springY,
          transformPerspective: 1200,
          transformOrigin: "center",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Icon */}
        <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full transition-transform duration-200 group-hover:scale-110">
          <Icon
            size={48}
            className="text-white group-hover:text-color-1 group-hover:drop-shadow-[0_0_12px_#C94FA3] transition-colors duration-200"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center mt-6">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-white/70 mt-2">{subtitle}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
