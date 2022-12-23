import React from "react";
import img2 from "../../images/back.png";
import "../../styles/HomePage.css";
const HomePage = () => {
  return (
    <div>
      <p style={{}}>
        <img src={img2} alt="" />
      </p>
      <div>
        <h1 className="text-5">Наш центр предоставляет вам</h1>
        <p className="helper"></p>
        <div className="container-1">
          <div className="container-2">
            <button className="btn-1">Современное оборудование</button>
            <button className="btn-2">Комфортный стационар</button>
            <button className="btn-3">Уникальные операции</button>
          </div>
          <div className="container-3">
            <button className="btn-4">
              Удобное расположение в самом центре города
            </button>
            <button className="btn-5">Опытные врачи разного профиля</button>
            <button className="btn-6">Удобная охраняемая парковка</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
