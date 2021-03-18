import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import { NewsList } from "../components/Data/NewsList";

const Stories = () => {
  return (
    <>
      <Banner title="Stories" />

      <section className="stories">
        <div className="container">
          <h2>Trending Now</h2>
          <div className="top__stories">
            <div className="top__stories__grid">
              {NewsList.map((story, key) => {
                if (story.featured === "yes") {
                  return (
                    <div className="story__big">
                      <img src={story.img} alt="" />
                      <div className="story__details">
                        <h3>{story.title}</h3>
                        <ul>
                          <li>{story.date}</li>
                        </ul>
                        <Link to="/">Read More </Link>
                      </div>
                    </div>
                  );
                }
              })}

              {NewsList.map((story, key) => {
                if (story.featured === "no" && story.headline === "yes") {
                  return (
                    <div className="story__sm">
                      <img src={story.img} alt="" />
                      <div className="story__details">
                        <h3>{story.title}</h3>
                        <ul>
                          <li>{story.date}</li>
                        </ul>
                        <Link to="/">Read More </Link>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="storylist">
        <div className="container">
          <div className="storylist__grid">
            <div className="storylist__grid__main">
              <div className="inner__grid">
                {NewsList.map((story, key) => {
                  if (story.featured === "no" && story.other === "yes") {
                    return (
                      <div className="storybox">
                        <img src="" alt="" />
                        <div className="details">
                          <h4>Lorem ipsum dolor sit amet.</h4>
                          <small>March 2</small>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Similique, pariatur facilis. Possimus
                            voluptatem quas obcaecati vitae est voluptatibus,
                            accusamus itaque.
                          </p>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="storylist__grid__sidebar">
              <h2>sidebar</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
