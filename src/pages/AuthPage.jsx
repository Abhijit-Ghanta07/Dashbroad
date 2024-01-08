import { Box, Container } from "@mui/material";
import { Sidebar } from "../includes/index";
import { Outlet } from "react-router-dom";

import style from "./pages.module.scss";
const AuthPage = () => {
  return (
    <>
      <Box sx={{ height: "100vh" }} className={style.bg__gradient}>
        <Outlet />
      </Box>
    </>
  );
};

export default AuthPage;
