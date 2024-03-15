import {
  Box,
  Button,
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
            <Chip icon={<AddIcon />} label="20%" color="primary" />
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
            <Chip icon={<RemoveIcon />} label="10%" color="secondary" />
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
            <Chip icon={<RemoveIcon />} label="10%" color="secondary" />
          </Box>
        </ListItem>
        <ListItem>
          <Button
            variant="contained"
            color="success"
            sx={{ display: "block", width: "100%" }}
          >
            View All
          </Button>
        </ListItem>
      </List>
    </Box>
  );
};

export default Trans;
