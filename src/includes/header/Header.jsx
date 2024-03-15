import {
  Box,
  Button,
  Grid,
  Menu,
  MenuItem,
  Paper,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

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
    <Box>
      <Paper sx={{ p: 2 }} square>
        <Grid container>
          <Grid xs item>
            {/* icon */}
            <Link to={"/home"} className={style.link}>
              DashBroad
            </Link>
          </Grid>
          <Grid xs item container justifyContent={"flex-end"}>
            <Box className={style.header__input__box}>
              <SearchIcon />
              <TextField
                variant="standard"
                placeholder="Search Transactions,Customers"
                className={style.header__input}
              />
            </Box>

            <Box>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <AccountCircleIcon sx={{ fill: "#2e5266" }} />
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
