import React from "react";
import { Anchor } from "../Anchor/Anchor";
import HeroImg from "../../images/hero.png";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            <div className="hero__grid__item">
              <div className="wrapper">
                <h1>Ulticlen</h1>
                <h2>Clean Ag+</h2>
                <p>
                  “Clean AG+” realizes the industry’s first high safety and high
                  stability! Powerful sterilization power decomposes pathogenic
                  microorganisms and thoroughly inactivates them!”
                </p>

                <Anchor path="product">View Product </Anchor>
              </div>
            </div>
            <div className="hero__grid__item">
              <img src={HeroImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
