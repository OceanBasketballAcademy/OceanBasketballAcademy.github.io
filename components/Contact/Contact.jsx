import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aa9i9pb",
        "template_pyo6wzk",
        form.current,
        "hQmUoivEfzJRTauDJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Hubungi</span>
          <span>Kami</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ffe8e1" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Nama"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Pesan"/>
          <input type="submit" value="Kirim" className="button"/>
          <span>{done && "Terima Kasih Telah Menghubungi Kami"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "#cdebff" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
