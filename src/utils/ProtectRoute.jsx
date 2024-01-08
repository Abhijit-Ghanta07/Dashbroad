import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export const ProtectRoute = ({ children }) => {
  const [user, setUser] = useState(false);
  return user ? children : <Navigate to={"/"} />;
};
export const UserProtect = ({ children }) => {
  const [user, setUser] = useState(false);

  return user ? <Navigate to={"/home"} /> : children;
};
