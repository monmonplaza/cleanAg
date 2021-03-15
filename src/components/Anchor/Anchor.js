import React from "react";
import { Link } from "react-router-dom";

const STYLE = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Anchor = ({ children, type, buttonStyle, buttonSize, path }) => {
  const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link
      to={path}
      className="btn-mobile"
      className={`btn-${checkButtonStyle} ${checkButtonSize}`}
      type={type}
    >
      {children}
    </Link>
  );
};
