import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import EditProduct from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetails from "./pages/ProductDetailsPage";
import ProductPage from "./pages/ProductPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/register",
      element: <RegisterPage />,
      id: 1,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 2,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 3,
    },
    {
      link: "/edit",
      element: <EditProduct />,
      id: 4,
    },
    {
      link: "/",
      element: <HomePage />,
      id: 5,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 6,
    },
    {
      link: "/details",
      element: <ProductDetails />,
      id: 7,
    },
    {
      link: "/product",
      element: <ProductPage />,
      id: 8,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map(item => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
