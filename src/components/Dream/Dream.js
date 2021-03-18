import React from "react";
import plusIcon from "../../images/icon_plus.png";

const Dream = () => {
  return (
    <>
      <section className="dream">
        <div className="container">
          <h2>Dreams spread to the world with silver ions!</h2>
          <div className="dream__content">
            <div className="dream__grid">
              <div className="dream__grid__item">
                <div className="wrapper">
                  <p>
                    Our partner Will Partner Co., Ltd. met CleanTech Hanbai Co.,
                    Ltd., which has been involved in the sale of sterilization,
                    antibacterial and deodorant products for about 30 years, and
                    the level of sterilization, antibacterial and deodorant is
                    completely different. We have jointly developed “Clean Tech
                    Series / Clean AG+ Ulticlean”, a fine silver ion (pico
                    silver) product that is 1/1000 of normal silver ion (nano
                    silver).
                  </p>
                  <p>
                    When we tested this “pico-level silver ion” at various
                    research institutes at the development stage, we were able
                    to confirm the excellent effect and safety far beyond
                    expectations.
                  </p>
                  <p>
                    With the development of the “Clean Tech Series”, people who
                    have praised the product and people in industries that were
                    unrelated until now have become partners with strong ties,
                    and group companies that I had never imagined. Is growing
                    into.
                  </p>
                  <p>
                    Based on this pico silver product “Clean Tech Series”, my
                    vision for the future is to take on the challenge of
                    developing various products not only in Japan but also in
                    the world.
                  </p>
                </div>
              </div>
              <div className="dream__grid__item">
                <div className="wrapper text--center">
                  <img src={plusIcon} alt="" />
                  <p className="blue_text">
                    Clean AG+” realizes the industry’s first high safety and
                    high stability! Powerful sterilization power decomposes
                    pathogenic microorganisms and thoroughly inactivates them!”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dream;
