export const ArrowSvg = ({ active }) => {
  return (
    <svg className="overflow-visible" width="18" height="14" viewBox="0 0 14 8">
      {/* Arrow Head */}
      <path
        d="M9 0 L14 4 L9 8"
        strokeWidth="2"
        strokeLinecap="round"
        className="transition-all"
        fill="none"
        stroke="white"
        style={{
          transform: `translateX(${active ? "4px" : "0px"})`,
        }}
      />
      {/* Sliding Line */}
      <line
        x1="6"
        y1="4"
        x2="14"
        y2="4"
        className="transition-all"
        strokeWidth="2"
        strokeLinecap="round"
        stroke="white"
        style={{
          transform: `${active ? "scaleX(1)" : "scaleX(0)"} translateX(${
            active ? "4px" : "0px"
          })`,
          transformOrigin: "right",
        }}
      />
    </svg>
  );
};

export const ArrowBackSvg = ({ active }) => {
  return (
    <svg className="overflow-visible" width="18" height="14" viewBox="0 0 14 8">
      {/* Arrow Head */}
      <path
        d="M5 0 L0 4 L5 8"
        strokeWidth="2"
        strokeLinecap="round"
        className="transition-all"
        fill="none"
        stroke="white"
        style={{
          transform: `translateX(${active ? "-4px" : "0px"})`, // Przesunięcie w lewo
        }}
      />
      {/* Sliding Line */}
      <line
        x1="0"
        y1="4"
        x2="8"
        y2="4"
        className="transition-all"
        strokeWidth="2"
        strokeLinecap="round"
        stroke="white"
        style={{
          transform: `${active ? "scaleX(1)" : "scaleX(0)"} translateX(${
            active ? "-4px" : "0px"
          })`, // Skalowanie i przesunięcie w lewo
          transformOrigin: "left", // Punkt początkowy przesunięcia to lewa strona
        }}
      />
    </svg>
  );
};
