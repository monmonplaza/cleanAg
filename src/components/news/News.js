import React from "react";
import { Link } from "react-router-dom";
import { Anchor } from "../Anchor/Anchor";
import featNews from "../../images/feature_news.jpg";
import { NewsList } from "../Data/NewsList";
const News = () => {
  return (
    <>
      <section className="news">
        <div className="container">
          <h2>Latest Story</h2>
          <div className="news__grid">
            <div className="news__grid__item">
              {NewsList.map((news) => {
                if (news.featured == "yes") {
                  return (
                    <div className="featured__news">
                      <img src={featNews} alt="" />
                      <div className="featured__news__content">
                        <small>{news.category}</small>
                        <h3>{news.title}</h3>
                        <ul>
                          <li>{news.date}</li>
                          <li>By: {news.author}</li>
                        </ul>
                        <Anchor btnStyle="btn--outline_light">
                          Continue Reading
                        </Anchor>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <div className="news__grid__item">
              <div className="sidebar__news">
                <div className="wrapper">
                  <h3>Other Stories</h3>
                  {NewsList.slice(0, 3).map((news_side) => {
                    if ((news_side.featured = "no")) {
                      return (
                        <Link to="/">
                          <div className="sidebar__news__item">
                            <small>{news_side.category}</small>
                            <h4>{news_side.title}</h4>
                            <p>{news_side.date}</p>
                          </div>
                        </Link>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
