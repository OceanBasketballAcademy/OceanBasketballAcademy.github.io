import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Profile from './profile.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Profil</span>
        <span>Kami</span>
        <spane>
          Klik Tombol Download PDF Untuk Informasi Lebih Lanjut
          <br />
        </spane>
        <a href={Profile} download>
          <button className="button s-button">Download PDF</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ffe8e1" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "30rem" }}
          whileInView={{ left: "20rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Sejarah"}
            detail={"Ocean Basketball Academy Adalah Akademi Basket Pertama Yang Ada Di Kabupaten Sukabumi Yang Berdiri Pada Tanggal 7 Juli 2020 Berdomisili Di Cibadak, Kab. Sukabumi, Provinsi Jawa Barat. Berawal Dari Sebuah Pertemuan Yang Dihadiri Oleh Gema Rizky N. R. P., S.Pd., Tony Andrianus Pito, S.Ip. MM., Gagah Nurjanuar Putra, S.Ikom, Dani Nurcahyadi, S.Pd., dan Muhammad Rai Elian Fawwazal Bersepakat Untuk Mendirikan Sebuah Wadah Pendidikan Dalam Permainan Bola Basket Yang Bernama Ocean Basketball Academy."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-12rem", top: "7rem" }}
          whileInView={{ left: "1rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Visi"}
            detail={"Visi Ocean Basketball Academy Adalah Membangun Generasi Penerus Bangsa Agar Pada Masa Kini Dan Masa Mendatang Dapat Menjadi Makhluk Sosial Yang Berkarakter Positif, Berdaya Saing, Menjunjung Tinggi Sportifitas Dan Dapat Memberikan Kontribusi Bagi Masyarakat Dan Bangsa Indonesia"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "22rem" }}
          whileInView={{ left: "17rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Misi"}
            detail={
              "Misi Ocean Basketball Adalah Memberikan Materi Dasar Bola Basket Yang Benar, Membangun Karakter Yang Kuat, Attitude Yang Baik, Kepercayaan Diri Serta Semangat Kerjasama Dalam Satu Tim."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "#cdebff" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
