import {
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import { Height } from "@mui/icons-material";

const Trans = () => {
  return (
    <Box sx={{ width: "100%", height: "auto" }}>
      <List>
        <ListItem>
          <Typography variant="h6">Transactions</Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ justifyContent: "space-between" }}>
          <Stack>
            <Typography variant="h6" component={"p"}>
              121,000
            </Typography>
            <Typography variant="subtitle2">Total Transactions</Typography>
          </Stack>
          <Box>
            <Chip icon={<AddIcon />} label="20%" color="success" />
          </Box>
        </ListItem>
        <Divider />
        <ListItem sx={{ justifyContent: "space-between" }}>
          <Stack>
            <Typography variant="h6" component={"p"}>
              21,000
            </Typography>
            <Typography variant="subtitle2">Per Today</Typography>
          </Stack>
          <Box>
            <Chip icon={<RemoveIcon />} label="10%" color="error" />
          </Box>
        </ListItem>
        <Divider />
        <ListItem sx={{ justifyContent: "space-between" }}>
          <Stack>
            <Typography variant="h6" component={"p"}>
              $21.50
            </Typography>
            <Typography variant="subtitle2">AVG. Transactions</Typography>
          </Stack>
          <Box>
            <Chip icon={<RemoveIcon />} label="10%" color="info" />
          </Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default Trans;
