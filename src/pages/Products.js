import React from "react";
import Banner from "../components/Banner/Banner";
import plusIcon from "../images/icon_plus.png";
import { Anchor } from "../components/Anchor/Anchor";
const Products = () => {
  return (
    <>
      <Banner title="Products" />
      <section className="page__products">
        <div className="container">
          <div className="page__products__block">
            <h3 className="section--header">
              High-purity silver ion by original manufacturing method
            </h3>
            <p>
              The manufacturing method of
              <span className="text--primary">“Clean AG+”</span> is really
              simple.
            </p>
            <p>
              First, the silver compound is dissolved by a unique method and
              ionized to the atomic (200 bico) level. Next, by repeating the
              production to completely eliminate the toxicity, highly safe
              silver ion water can be produced.
            </p>
            <p>
              The substances used to dissolve silver compounds are of natural
              origin, which are kind to humans and the environment. By wrapping
              silver ions in the substance, the force to return to silver is
              contained, and the stabilization of silver ions, which was
              conventionally considered to be technically difficult, was
              successful for the first time. We have developed extremely
              high-purity silver ionized water.
            </p>
            <small className="text--primary">* Patent applied</small>
          </div>

          <div className="page__products__block">
            <h3 className="section--header">
              Unrivaled sterilization power + high safety
            </h3>
            <p>
              With the growing desire for cleanliness, there are many products
              called silver ions on the market. But how many products are really
              safely ionized?
            </p>
            <p>
              <span className="text--primary">“Clean AG+”</span> does not
              contain any impurities other than silver ions in the water, so you
              can use it with confidence at any time.
            </p>
            <p>
              We have passed all rigorous product tests in our own in-house
              tests, safety tests by third-party inspection organizations, and
              antibacterial properties tests, demonstrating its reliable
              quality. (There is public engineering evidence)
            </p>
          </div>

          <div className="page__products__block">
            <h3 className="section--header">
              We recommend using an ultrasonic humidifier that utilizes
              <span className="text--primary">“Clean AG+”</span> to disinfect
              and deodorize the room.<sup className="text--primary">*1</sup>
              <sup className="text--primary">*2</sup>
            </h3>
            <p>
              Atomized silver ions catch pathogenic microorganisms floating in
              the room, decompose cells and completely inactivate them, and also
              decompose the source of unpleasant odors in the space to promote
              the deodorizing effect. “Clean AG+“, which is safe and friendly to
              the natural environment, is a new dimension of disinfectant that
              you can feel the effect as you use it.
            </p>
            <p className="note">
              *1. Dilute this product with pure water (distilled water, purified
              water) before use. Tap water, mineral water, etc. contain
              components other than water in the water and change to silver
              compounds over time, so the sterilization effect may be weakened.
            </p>
            <p className="note">
              *2. After use, clean the water storage tank and vibration valve
              frequently.
            </p>
          </div>
        </div>
      </section>

      <section className="product__actions">
        <div className="container">
          <div className="product__actions__grid">
            <div className="product__actions__grid__items">
              <div className="wrapper">
                <h2>Ulticlean</h2>
                <h3>Clean Ag+</h3>
                <Anchor path="contact" btnStyle="btn--primary">
                  Send us a Message
                </Anchor>
                <Anchor path="faq" btnStyle="btn--outline_light">
                  Frequently Ask
                </Anchor>
              </div>
            </div>
            <div className="product__actions__grid__items">
              <div className="wrapper">
                <img src={plusIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
