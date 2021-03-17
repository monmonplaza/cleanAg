import React from "react";
import { Link } from "react-router-dom";
import LogoLight from "../../images/cleantec-logo_sm.png";
import wageTop from "../../images/wave_top.png";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <img src={wageTop} alt="" className="wave wave__top" />
        <div className="container">
          <div className="footer__grid">
            <div className="footer__grid__item">
              <img src={LogoLight} alt="" />
            </div>
            <div className="footer__grid__item">
              <nav className="footer__nav">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/company">Company</Link>
                  </li>
                  <li>
                    <Link to="/news">News</Link>
                  </li>
                  <li>
                    <Link to="/product">Product</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__grid__item">
              <ul className="social__media">
                <li>
                  <Link to="">
                    <AiFillFacebook />
                  </Link>
                </li>

                <li>
                  <Link to="">
                    <AiFillTwitterSquare />
                  </Link>
                </li>

                <li>
                  <Link to="">
                    <AiFillYoutube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
