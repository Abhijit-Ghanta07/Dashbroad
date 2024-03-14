import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../includes/index.js";

// scss
import style from "./pages.module.scss";

const HomePage = () => {
  return (
    <Box className={style.home__wrapper}>
      <Sidebar />
      <Box className={style.content__wrapper}>
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
};

export default HomePage;
