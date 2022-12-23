import React from "react";
import "../../styles/Navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import img1 from "../../images/logo.png";
const Navbar = () => {
  return (
    <div style={{ background: "transparent" }}>
      <div className="navbar">
        <div className="text">
          <p className="logo">
            <img src={img1} alt="" />
          </p>

          <p className="p-1">Направление</p>
          <p className="p-2">Врачи</p>
          <p className="p-3">Контакты</p>
          <div className="third">
            <p className="inp-p">
              <input type="text" placeholder="Поиск" className="inp" />
            </p>
            <div style={{ marginTop: "-20px" }}>
              <PersonIcon className="icons" />
              <p className="p-4">Вход</p>
            </div>
            <div style={{ marginTop: "-16px", marginRight: "60px" }}>
              <button className="btn"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
