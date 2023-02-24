import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Join/Contact Us</span>
        <span>Email: ocean.basketball002@gmail.com</span>
        <span>Whatsapp: +6285722710457</span>
        <span>Alamat: Kp. Ciater RT 01/05 Desa Balekambang Kec. Nagrak, Kab.Sukabumi, Jawa Barat 43352</span>
        </div>
        <div className="m-content">
          <span>Follow Us</span>
        <span>Youtube: Ocean Basketball</span>
        <span>Instagram: oceanbasketballacademy</span>
        </div>
      </div>
  );
};

export default Footer;
