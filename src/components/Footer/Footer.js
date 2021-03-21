import React, {useState} from "react";
import { Link } from "react-router-dom";
import LogoLight from "../../images/cleantec-logo_sm.png";
import wageTop from "../../images/wave_top.png";
import {Modal} from "../Modal/Modal";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
const Footer = () => {

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(!showModal);
   
  };

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
                    <Link to="/stories">Stories</Link>
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
      <div className="copyright">
        <p>&copy; 2021 All Right Reserved.</p>
        <ul>
          <li><button onClick={openModal}>Privacy Policy</button></li>
        </ul>
      </div>
      </footer>
      
      <Modal showModal = {showModal} setShowModal={setShowModal}/>
    </>
  );
};

export default Footer;
