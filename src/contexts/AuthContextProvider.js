import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "";

const AuthContextProvider = ({ children }) => {
  return <authContext.Provider value={{}}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
