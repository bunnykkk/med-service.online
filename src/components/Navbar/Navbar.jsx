import React from "react";
import "../../styles/Navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../../img/logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "transparent" }}>
      <div className="navbar">
        <div className="text">
          <p className="logo">
            <img
              src={logo}
              style={{ cursor: "pointer", height: "200px", width: "250px" }}
              alt=""
              onClick={() => navigate("/")}
            />
          </p>
          <p
            className="p-1"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/direction")}>
            Направление
          </p>
          <p
            className="p-1"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/doctors")}>
            Врачи
          </p>
          <p
            className="p-1"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/contact")}>
            Контакты
          </p>
          <div className="third">
            <p className="inp-p">
              <input type="text" placeholder="Поиск" className="inp" />
            </p>
            <div style={{ marginTop: "-20px" }}>
              <PersonIcon className="icons" />
              <p
                className="p-4"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/register")}>
                Вход
              </p>
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
