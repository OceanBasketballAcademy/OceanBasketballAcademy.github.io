import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Selamat Datang Di</span>
          <span>Ocean Basketball Academy</span>
          <span>Official Website</span>
          <span>Ayo Bergabung Dan Jadilah Bintang</span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Let's Join</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://api.whatsapp.com/send/?phone=+6285722710457&text=Halo+Ocean+Basketball+Academy&type=phone_number&app_absent=0">
          <img src={Github} alt="" />
          </a>
          <a href="https://www.youtube.com/@oceanbasketball">
          <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/oceanbasketballacademy/">
          <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "98%" }}
          whileInView={{ left: "74%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Practice And Be A Star" text2="" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "12rem" }}
          whileInView={{ top: "12rem", left: "0rem"}}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Play And Be" text2="A Champion" />
        </motion.div>

        <div className="blur" style={{ background: "#cdebff" }}></div>
        <div
          className="blur"
          style={{
            background: "#ffe8e1",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
