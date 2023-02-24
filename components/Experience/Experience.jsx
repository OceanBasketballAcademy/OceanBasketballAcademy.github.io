import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>6-9</div>
        <span  style={{color: darkMode?'white':''}}>Kegembiraan</span>
        <span>Belajar Bersahabat Dengan Bola</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>9-13</div>
        <span  style={{color: darkMode?'white':''}}>Pengembangan Skill</span>
        <span>Belajar Aksi-aksi</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>14-17</div>
        <span  style={{color: darkMode?'white':''}}>Pengembangan Permainan</span>
        <span>Belajar Bermain lima lawan lima</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>18+</div>
        <span  style={{color: darkMode?'white':''}}>Penampilan</span>
        <span>Belajar Menang</span>
      </div>
    </div>
  );
};

export default Experience;
