import { Box, Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarMenu } from "../../constants/Constant";
import logo from "../../assets/logos/logo-hand.png";
import LogoutIcon from "@mui/icons-material/Logout";
// scss
import style from "./sidebar.module.scss";
const drawerWidth = 250;
const Sidebar = () => {
  return (
    <>
      <Box sx={{ width: drawerWidth }} className={style.sidebar}>
        <Stack spacing={3} useFlexGap sx={{ height: "100%" }}>
          <Box sx={{ textAlign: "center" }}>
            <img src={logo} alt="logo" className={style.sidebar__logo} />
            <Typography variant="subtitle1">NexaVerse</Typography>
          </Box>
          <Stack spacing={2} useFlexGap>
            {sidebarMenu.map((link, i) => {
              return (
                <Link key={i} to={link.path} className={style.sidebar__link}>
                  <Box
                    sx={{
                      mt: "auto",
                      paddingInlineStart: 2,
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    {link.icon}
                    <Typography className={style.sidebar__link}>
                      {link.title}
                    </Typography>
                  </Box>
                </Link>
              );
            })}
          </Stack>
          <Divider sx={{ bgcolor: "#000" }} />
          <Box
            sx={{
              mt: "auto",
              paddingInlineStart: 2,
              display: "inline-flex",
              alignItems: "center",
            }}
            className={style.sidebar__link}
          >
            <LogoutIcon />
            <Typography sx={{ padding: ".3rem" }}>Log-Out</Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Sidebar;
