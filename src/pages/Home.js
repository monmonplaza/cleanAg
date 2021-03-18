import React from "react";
import { Cta } from "../components/Cta/Cta";
import Dream from "../components/Dream/Dream";
import Hero from "../components/Hero/Hero";
import Ion from "../components/Ion/Ion";
import News from "../components/News/News";
import Nav from "../components/Nav/Nav";
const Home = () => {
  return (
    <>
      <Hero />
      <Ion />
      <Dream />

      <Cta
        background="bt--primary"
        header="Want to know more?"
        body="We have compiled a list of frequently asked questions and questions that have arrived at our company."
        children="Frequently Ask"
        path="/faq"
        btnStyle="btn--outline_light"
      />
      <News />
    </>
  );
};

export default Home;
