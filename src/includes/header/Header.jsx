import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";

//
import style from "./header.module.scss";
const Header = () => {
  return (
    <Box>
      <Paper sx={{ p: 2 }} square>
        <Grid container>
          <Grid xs item>
            {/* icon */}
            <Link to={"/home"}>
              <Typography>SHERYO</Typography>
            </Link>
          </Grid>
          <Grid xs item container justifyContent={"flex-end"}>
            <Stack direction={"row"} alignItems={"center"} gap={3}>
              <input type="text" className={style.header__input} />
              <LanguageIcon />
              <NotificationsNoneIcon />
              <Brightness7Icon />
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Header;
