"use client";

import { useState } from "react";
import { ArrowSvg } from "../design/ArrowSvg";

const Button = ({ className, href, onClick, children, px }) => {
  const [active, setActive] = useState(false);

  const classes = `button relative inline-flex items-center justify-center py-3 rounded-full border border-white transition-colors text-n-1 hover:bg-n-1/10 space-x-1 ${
    px || "px-7"
  } ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button
      className={classes}
      onClick={onClick}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <span className={spanClasses}>{children}</span>
      <ArrowSvg active={active} />
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      <ArrowSvg active={active} />
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
