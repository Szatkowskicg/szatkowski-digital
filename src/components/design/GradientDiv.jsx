const gradientVariants = {
  top: "bg-gradient-to-t from-white/10 to-transparent",
  bottom: "bg-gradient-to-b from-white/10 to-transparent",
  left: "bg-gradient-to-l from-white/10 to-transparent",
  right: "bg-gradient-to-r from-white/10 to-transparent",
};

// fade: "top" or "bottom"
// gradient: "tr", "tl", "br", "bl"
const GradientDiv = ({
  className = "",
  children,
  fade = "top",
  gradient = "tr",
}) => {
  // Map fade to Tailwind
  const fadeClasses = {
    top: "absolute top-0 bottom-1/3 inset-x-0",
    bottom: "absolute top-1/3 bottom-0 inset-x-0",
  };

  // Map fade to CSS
  const fadeGradient = {
    top: "linear-gradient(to top, rgba(10,10,10,0.05) 0%, rgba(10,10,10,0.95) 80%, #0A0A0A 100%)",
    bottom:
      "linear-gradient(to bottom, rgba(10,10,10,0.05) 0%, rgba(10,10,10,0.95) 80%, #0A0A0A 100%)",
  };

  // Map gradient CSS
  const gradients = {
    tr: "linear-gradient(to top right, rgba(201,88,170,0.14) 0%, rgba(201,88,170,0) 70%)",
    tl: "linear-gradient(to top left, rgba(201,88,170,0.14) 0%, rgba(201,88,170,0) 70%)",
    br: "linear-gradient(to bottom right, rgba(201,88,170,0.14) 0%, rgba(201,88,170,0) 70%)",
    bl: "linear-gradient(to bottom left, rgba(201,88,170,0.14) 0%, rgba(201,88,170,0) 70%)",
  };

  const gridOverlay = `
  linear-gradient(
    rgba(255,255,255,0.015) 1px,
    transparent 1px
  ),
  linear-gradient(
    90deg,
    rgba(255,255,255,0.015) 1px,
    transparent 1px
  )
`;

  return (
    <div className="relative">
      {/* Fade gradient */}
      <div
        className={`${fadeClasses[fade]} z-10`}
        style={{ background: fadeGradient[fade] }}
      />

      <div className="relative w-full rounded-2xl border border-white/10 shadow overflow-hidden">
        {/* Half gradient */}
        <div
          className="absolute inset-0 rounded-2xl will-change-transform translate-z-0"
          style={{ background: gradients[gradient] }}
        />

        <div
          className={`relative z-10 w-full py-10 md:py-16 lg:py-24 xl:py-32 px-5 md:px-10 lg:px-20 ${className}`}
        >
          {children}
        </div>
      </div>
      {/* GRID OVERLAY */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          backgroundImage: gridOverlay,
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
};

export default GradientDiv;
