import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../includes/index.js";

const HomePage = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};

export default HomePage;
