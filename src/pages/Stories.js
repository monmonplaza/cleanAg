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
                    <div className="story__big" key={key}>
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
                        <img src={story.img} alt="" />
                        <div className="details">
                        <small>{story.date}</small>
                          <h4>{story.title}</h4>
                          
                          <p>
                           {story.excerpt}
                          </p>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="storylist__grid__sidebar">
              <h2>Other Stories</h2>
              <div className="other__stories">
              {NewsList.slice(0, 5).map((story, key) => {
                 if( story.archive === "yes") {
                  return(
                    <div className="other__stories__item">
                      <img src={story.img} alt=""/>
                      <Link >
                      <div className="content">
                        <h4>{story.title}</h4>
                        <small>{story.date}</small>
                      </div>
                      </Link>
                    </div>
                   )}
                  
              })}
                


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
