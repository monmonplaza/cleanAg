import React from "react";
import waveBottom from "../../images/wave_banner.png";
const Banner = ({ title }) => {
  return (
    <>
      <div className="banner">
        <h1>{title}</h1>
        <img src={waveBottom} alt="" />
      </div>
    </>
  );
};

export default Banner;
