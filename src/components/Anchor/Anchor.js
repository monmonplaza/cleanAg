import React from "react";
import { Link } from "react-router-dom";

const STYLE = [
  "btn--primary",
  "btn--light",
  "btn--outline_light",
  "btn--outline_primary",
];
const SIZES = ["btn--medium", "btn--large"];

export const Anchor = ({ children, type, btnStyle, buttonSize, path }) => {
  const checkButtonStyle = STYLE.includes(btnStyle) ? btnStyle : STYLE[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link
      to={path}
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      type={type}
    >
      {children}
    </Link>
  );
};
