"use client";
import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="container grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <p className="h4 mb-8">
          Smokins to sieć detaliczna, która postanowiła zamienić papierowe
          pieczątki na cyfrowy ekosystem.
        </p>
        <p className="body-lg">
          Aplikacja została zaprojektowana z myślą o szybkości i wysokim
          kontraście. Cel był prosty: interfejs typu utility-first, który
          pozwala na błyskawiczną obsługę przy kasie bez zbędnych kliknięć.
        </p>
      </motion.div>

      <div className="body-lg">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Głównym priorytetem technologicznym było stworzenie skalowalnego
          rozwiązania cross-platformowego, które obsłuży logikę biznesową bez
          kosztownej infrastruktury serwerowej.
        </motion.p>
      </div>
    </section>
  );
}
