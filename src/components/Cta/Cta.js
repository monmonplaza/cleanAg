import React from "react";
import { Anchor } from "../Anchor/Anchor";

const STYLE = ["bg--primary", "bg--light"];
const BTN = ["btn--outline_light", "btn--outline_primary"];

export const Cta = ({ background, header, body, children, path, btnStyle }) => {
  const checkBackground = STYLE.includes(background) ? background : STYLE[0];
  const checkBtnStyle = BTN.includes(btnStyle) ? btnStyle : STYLE[0];
  return (
    <>
      <section className={`cta ${checkBackground}`}>
        <div className="container">
          <div className="cta__wrapper">
            <h3>{header}</h3>
            <p>{body}</p>

            <Anchor to={path} btnStyle={checkBtnStyle}>
              {children}
            </Anchor>
          </div>
        </div>
      </section>
    </>
  );
};
