import React from "react";
import logo from "../../images/cleantec-logo.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__grid">
            <div className="branding">
              <img src={logo} alt="asdasd" />
            </div>
            <nav>
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
                  <Link to="/products">Products</Link>
                </li>

                <li>
                  <Link to="/faq">Faq</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
