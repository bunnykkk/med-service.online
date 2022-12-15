import React from "react";
import { Routes, Route } from "react-router-dom";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [];

  return (
    <Routes>
      {PUBLIC_ROUTES.map(item => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
