import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GlitchImage({
  src,
  alt = "",
  className = "",
  ...props
}) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 3000 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative ${className}`} {...props}>
      <img src={src} alt={alt} className="w-full h-full object-cover z-0" />

      {glitch && (
        <>
          <motion.img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover mix-blend-screen z-10"
            initial={{ x: -10 }}
            animate={{ x: 10 }}
            transition={{ duration: 0.1 }}
            style={{ clipPath: "inset(0 0 70% 0)" }}
          />

          <motion.img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover mix-blend-screen z-10"
            initial={{ x: 10 }}
            animate={{ x: -10 }}
            transition={{ duration: 0.1 }}
            style={{ clipPath: "inset(30% 0 0 0)" }}
          />
        </>
      )}
    </div>
  );
}
