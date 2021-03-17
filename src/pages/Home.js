import React from "react";
import { Cta } from "../components/Cta/Cta";
import Dream from "../components/Dream/Dream";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Ion from "../components/Ion/Ion";
import News from "../components/news/News";
import Partner from "../components/Partner/Partner";

const Home = () => {
  return (
    <>
      <Hero />
      <Ion />
      <Dream />
      <Partner />
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
