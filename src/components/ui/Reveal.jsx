"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Reveal = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={`relative ${className || ""}`}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      exit={{
        opacity: 0,
        y: -30,
        transition: { ease: "easeIn", duration: 0.3 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        type: "spring",
        stiffness: 75,
        damping: 15,
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
