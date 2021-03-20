import React, {useState} from "react";
import logo from "../../images/cleantec-logo.png";
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa"
const Nav = () => {

const [menu, setMenu] = useState(false);
const showMenu = () => setMenu(!menu)
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__grid">
            <div className="branding">
              <img src={logo} alt="asdasd" />
            </div>

            <div className="toggle__menu" onClick={showMenu}>
                  <FaBars />
            </div>  

            <nav className={menu ? 'open' : ''}>
            
              <ul onClick={showMenu}>
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
                  <Link to="/products">Products</Link>
                </li>

                <li>
                  <Link to="/faq">Faq</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
              <div className="close__mobile" onClick={showMenu}>
                 Exit Menu
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
