import { Box, Stack, Typography } from "@mui/material";
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
            <Typography variant="h6">NexaVerse</Typography>
          </Box>
          <Stack spacing={3} useFlexGap mt={3}>
            {sidebarMenu.map((link, i) => {
              return (
                <Link key={i} to={link.path} className={style.sidebar__link}>
                  <Box
                    sx={{
                      mt: "auto",
                      paddingInlineStart: 4,
                      display: "inline-flex",
                      gap: 1,
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
          <Box
            sx={{
              mt: "auto",
              paddingInlineStart: 4,
              display: "inline-flex",
              gap: 1,
            }}
          >
            <LogoutIcon />
            <Typography className={style.sidebar__link}>Log-Out</Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Sidebar;
