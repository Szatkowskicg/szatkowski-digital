import { useEffect, useState } from "react";
import { motion } from "motion/react";
import bgImg from "../../assets/images/terminal_bg.png";
import logo from "../../assets/images/szatkowski_logo.png";
import GlitchImage from "../GlitchImage";
import Button from "../Button";

export const TerminalBoot = ({ speed = 150 }) => {
  const [visibleLines, setVisibleLines] = useState([]);

  const LINES = [
    "--- BOOT SEQUENCE 0x0001 ---",
    "00:00:01 kernel: secure-mode enabled",
    "00:00:07 network: eth0 assigned 158.132.254.151",
    "00:00:12 sshd: key accepted (szatkowski.pub)",
    "00:00:27 services: portfolio-server @ :8081 -> ready",
    "--- /BOOT ---",
    "Access keys hidden — enter the right sequence to reveal more.",
  ];

  useEffect(() => {
    let timers = [];
    LINES.forEach((line, idx) => {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, speed * idx);
      timers.push(t);
    });
    return () => timers.forEach((t) => clearTimeout(t));
  }, [speed]);

  const handleIpClick = (line) => {
    if (line.includes("158.132.254.151")) {
      window.open(
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "_blank",
        "noopener"
      );
    }
  };

  return (
    <div className="bg-[#161B22]/90 text-color-2/80 font-mono p-4 mx-auto w-full h-full overflow-y-auto">
      <div className="relative space-y-1 text-sm leading-tight">
        {visibleLines.map((line, i) => {
          const isIp = line.includes("158.132.254.151");
          return (
            <div
              key={i}
              className={
                isIp
                  ? "cursor-pointer hover:text-color-2.2 transition-colors"
                  : ""
              }
              onClick={() => isIp && handleIpClick(line)}
            >
              {line}
            </div>
          );
        })}

        <motion.span
          aria-hidden="true"
          className="inline-block h-4 w-[8px] bg-color-2/80 align-middle mt-1"
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: 2.5, duration: 1 }}
        />
      </div>
    </div>
  );
};

export const TerminalLogo = () => {
  return (
    <div className="w-full h-full relative bg-[#161B22]/90">
      <img
        src={bgImg}
        alt="Opis zdjęcia"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
        <GlitchImage src={logo} alt="Logo" className="h-auto w-[30%]" />

        <div className="flex items-center text-white text-lg font-orbitron">
          <span>Connecting</span>

          <div className="flex ml-4 space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="inline-block w-2 h-2 bg-white rounded-full"
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const TerminalContactFrom = ({ onClose }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#161B22]/90 text-white px-4 z-1">
      {/* Header */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-10 font-orbitron"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>

      {/* Form */}
      <form className="w-full max-w-2xl flex flex-col space-y-6">
        {/* Name */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
          <div className="flex-1">
            <label className="block mb-1 text-sm text-gray-300">
              First Name:
            </label>
            <input
              type="text"
              className="w-full bg-transparent border border-gray-400 focus:border-green-400 outline-none px-3 py-2 rounded-md transition-all"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-sm text-gray-300">
              Last Name:
            </label>
            <input
              type="text"
              className="w-full bg-transparent border border-gray-400 focus:border-green-400 outline-none px-3 py-2 rounded-md transition-all"
            />
          </div>
        </div>

        {/* Email & phone */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
          <div className="flex-1">
            <label className="block mb-1 text-sm text-gray-300">Email:</label>
            <input
              type="email"
              className="w-full bg-transparent border border-gray-400 focus:border-green-400 outline-none px-3 py-2 rounded-md transition-all"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-sm text-gray-300">
              Phone number:
            </label>
            <input
              type="tel"
              className="w-full bg-transparent border border-gray-400 focus:border-green-400 outline-none px-3 py-2 rounded-md transition-all"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 text-sm text-gray-300">Message:</label>
          <textarea
            rows="5"
            className="w-full bg-transparent border border-gray-400 focus:border-green-400 outline-none px-3 py-2 rounded-md resize-none transition-all"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-center pt-4">
          <Button>Sent</Button>
          {onClose && <Button onClick={onClose}>Cancel</Button>}
        </div>
      </form>
    </div>
  );
};
