import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarMenu } from "../../constants/constant";

// scss
import style from "./sidebar.module.scss";
const drawerWidth = 300;
const Sidebar = () => {
  return (
    <>
      <Box sx={{ width: drawerWidth }} className={style.sidebar}>
        <Stack spacing={3} useFlexGap>
          <Typography>Logo</Typography>
          <Stack spacing={3} useFlexGap padding={2}>
            {sidebarMenu.map((link, i) => {
              return (
                <Link key={i} to={link.path} className={style.sidebar__link}>
                  {link.title}
                </Link>
              );
            })}
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Sidebar;
