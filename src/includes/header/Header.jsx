import {
  Avatar,
  Box,
  Button,
  Grid,
  Menu,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Link } from "react-router-dom";
import { user } from "../../constants/Constant";

//
import style from "./header.module.scss";
import { useState } from "react";
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={style.header__con}>
      <Paper sx={{ p: 2 }} square>
        <Grid container>
          <Grid xs item>
            {/* icon */}
            <Stack
              gap={2}
              useFlexGap
              direction={"row"}
              sx={{
                alignItems: "center",
              }}
            >
              <Link to={"/home"} className={style.link}>
                DashBroad /
              </Link>
              <Box className={style.header__input__box}>
                <SearchIcon />
                <TextField
                  variant="standard"
                  placeholder="Search Transactions,Customers"
                  className={style.header__input}
                />
              </Box>
            </Stack>
          </Grid>
          <Grid xs item container gap={2} justifyContent={"flex-end"}>
            <Box>
              <Stack
                direction={"row"}
                gap={2}
                useFlexGap
                sx={{ alignItems: "center", height: "100%" }}
              >
                <NotificationsIcon />
                <WbSunnyIcon />
              </Stack>
            </Box>
            <Box>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {/* <AccountCircleIcon sx={{ fill: "#2e5266" }} /> */}
                <Avatar
                  src={user.img}
                  alt="user img"
                  sx={{ width: "25px", height: "25px" }}
                />
                <Typography variant="subtitle2" sx={{ mx: 1 }}>
                  {user.name}
                </Typography>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Header;
