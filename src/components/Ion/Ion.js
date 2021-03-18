import React from "react";
import { Anchor } from "../Anchor/Anchor";
import wageTop from "../../images/wave_top.png";
import wageBottom from "../../images/wave_bottom.png";
import agPlus from "../../images/ag+.png";
import { IonData } from "../Data/Home";
const Ion = () => {
  return (
    <>
      {IonData.map((ion, key) => {
        return (
          <section className="ion" data-key={key}>
            <img src={wageTop} alt="" className="wave wave__top" />
            <img src={wageBottom} alt="" className=" wave wave__bottom" />
            <div className="container">
              <div className="ion__grid">
                <div className="ion__grid__item">
                  <div className="wrapper">
                    <div className="title__block">
                      <img src={agPlus} alt="" />
                    </div>

                    {ion.agplus.split("\n").map((paragraph) => {
                      return <p>{paragraph}</p>;
                    })}
                  </div>
                </div>
                <div className="ion__grid__item">
                  <div className="wrapper">
                    <div className="title__block">
                      <h2>{ion.silverIonTitle}</h2>
                    </div>
                    {ion.silverIon.split("\n").map((paragraph, i) => {
                      return <p>{paragraph}</p>;
                    })}

                    <Anchor path="about" btnStyle="btn--light">
                      {ion.link}
                    </Anchor>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Ion;
