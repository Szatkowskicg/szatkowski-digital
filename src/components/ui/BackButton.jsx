import { useState } from "react";
import { ArrowBackSvg } from "../design/ArrowSvg";

const BackButton = ({ className, href, onClick, children, px, white }) => {
  const [active, setActive] = useState(false);

  const classes = `button relative inline-flex items-center justify-center py-3 rounded-full text-n-1 space-x-1 ${
    px || "px-3"
  } ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button
      className={classes}
      onClick={onClick}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <ArrowBackSvg active={active} />
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <ArrowBackSvg active={active} />
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default BackButton;
