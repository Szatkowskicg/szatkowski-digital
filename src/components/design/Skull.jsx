import { motion } from "framer-motion";
import skullTop from "../../assets/images/skull_top.png";
import skullBottom from "../../assets/images/skull_bottom.png";

export function Skull({ className = "" }) {
  return (
    <div
      className={`relative w-[50px] h-[65px] lg:w-[75px] lg:h-[95px]
        ${className}`}
    >
      {/* Bottom skull */}
      <motion.img
        src={skullBottom}
        alt="Skull Bottom"
        className="absolute bottom-0 left-0 w-full origin-top px-1 lg:px-2"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Top skull */}
      <motion.img
        src={skullTop}
        alt="Skull Top"
        className="absolute top-0 left-0 w-full"
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export function SkullBackground({
  rows = 4,
  columns = 5,
  speed = 40,
  className = "",
}) {
  const skulls = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      skulls.push({
        id: `${row}-${col}`,
        top: (row / rows) * 100,
        left: ((col + (row % 2 ? 0.5 : 0)) / columns) * 100,
      });
    }
  }

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <motion.div
        className="absolute w-[300%] h-full"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[0, 1].map((n) => (
          <div
            key={n}
            className="absolute top-0 left-0 w-1/2 h-full"
            style={{ transform: `translateX(${n * 100}%)` }}
          >
            {skulls.map((skull) => (
              <div
                key={`${n}-${skull.id}`}
                className="absolute"
                style={{
                  top: `${skull.top}%`,
                  left: `${skull.left}%`,
                  transform: "translate(-50%, 50%)",
                  opacity: 0.7,
                }}
              >
                <Skull />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
