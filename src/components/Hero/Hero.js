import React from "react";
import { Anchor } from "../Anchor/Anchor";
import HeroImg from "../../images/hero.png";
import { HeroData } from "../Data/Home";
const Hero = () => {
  return (
    <>
      {HeroData.map((hero, key) => {
        return (
          <section className="hero" key={key}>
            <div className="container">
              <div className="hero__grid">
                <div className="hero__grid__item">
                  <div className="wrapper">
                    <h1>{hero.header}</h1>
                    <h2>{hero.subheader}</h2>
                    <p>{hero.body}</p>
                    <Anchor path="product">{hero.link} </Anchor>
                  </div>
                </div>
                <div className="hero__grid__item">
                  <img src={HeroImg} alt="" />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Hero;
