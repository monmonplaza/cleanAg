import React from "react";
import Banner from "../components/Banner/Banner";
import { Cta } from "../components/Cta/Cta";
import { FaqList } from "../components/Data/FaqList";
const Faq = () => {
  return (
    <>
      <Banner title="Frequently Ask Questions" />
      <section className="page__faq">
        <div className="container">
          <h3 className="section--header">
            We have compi led a list of frequently asked questions and questions
            that have arrived at our company.
          </h3>

          <div className="faq__block">
            <div className="faq__item">
              {FaqList.map((item) => {
                return (
                  <div className="faq__grid">
                    <div className="faq__question">
                      <h4>{item.question}</h4>
                    </div>
                    <div className="faq__answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Cta
        background="bg--light"
        header="Still have questions?"
        body="Don't hesitate to reach out to us anytime"
        children="Contact Us"
        path="/contact"
        btnStyle="btn--outline_primary"
      />
    </>
  );
};

export default Faq;
