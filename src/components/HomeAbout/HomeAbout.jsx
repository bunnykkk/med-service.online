import React from "react";
import img2 from "../../img/Rectangle.svg";
import "../../styles/HomePage.css";

const HomePage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('${img2}')`,
          backgroundRepeat: "no-repeat",
        }}
        className="img-1">
        <div className="container-10">
          <h2 className="h2-text">
            Восстановление и сохранение Вашего здоровья.
          </h2>
          <p className="h2-p-text">
            Широкий спектр медицинских услуг: •пластические операции •хирургия
            •гинекология и многое другое.
          </p>
          <button className="btn-h2">Записаться </button>
        </div>
      </div>
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
