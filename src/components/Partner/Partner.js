import React from "react";
import { PartnerData, TimelineData } from "../Data/Home";
const Partner = () => {
  return (
    <>
      <div className="partner">
        <div className="container">
          {PartnerData.map((content) => {
            return (
              <div className="partner__top">
                <h2>{content.top.header}</h2>
                <p>{content.top.body}</p>
              </div>
            );
          })}

          <div className="partner__body">
            <div className="partner__grid">
              <div className="partner__grid__item flex__item">
                <div className="timeline">
                  {TimelineData.map((timeline) => {
                    return (
                      <div className="timeline__item">
                        <h4>{timeline.year}</h4>
                        <p> {timeline.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {PartnerData.map((content) => {
                return (
                  <div className="partner__grid__item">
                    <div className="wrapper">
                      <img src={content.image.src} alt="sadasd" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {PartnerData.map((content) => {
            return (
              <div className="partner__bottom">
                <h3>{content.bottom.header}</h3>
                <p>{content.bottom.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Partner;
