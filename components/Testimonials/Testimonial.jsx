import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      "Ocean Basketball Academy adalah klub dengan pelatih yang hebat dan tidak dimiliki klub lain. Klub ini memiliki azas kekeluargaan dan hubungan antar pemain yang ramah dan solid."
    },
    {
      img: profilePic2,
      review:
        "Ocean Basketball Academy membuat saya nyaman, bahagia, dan saya bisa menunjukkan diri saya yang sebenarnya. Dan tentu saja, dari pelatih yang termotivasi, orang tua, dan teman, saya sangat menyukai tim saya. Mereka terkadang melakukan hal-hal yang unik dan menarik.",
    },
    {
      img: profilePic3,
      review:
        "Berada bersama Ocean Basketball Academy adalah pengalaman yang sangat luar biasa dan menyenangkan. Orang bisa sangat lucu di sini. Saya mencintai mereka semua.",
    },
    {
      img: profilePic4,
      review:
        "Materi dasar-dasar bermain bola basket yang diberikan Ocean Basketball Academy sangat bagus, dan saya sangat senang berada di klub ini.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Testimoni Dari </span>
        <span>Peserta Didik </span>
        <span>Kami.....</span>
      <div className="blur t-blur1" style={{ background: "#cdebff" }}></div>
      <div className="blur t-blur2" style={{ background: "#ffe8e1" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
