import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import Logo from "../../img/logo.png"
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
        <div className="n-name">Ocean Basketball</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Beranda
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Profil
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Pengalaman
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Galeri
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimoni
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
