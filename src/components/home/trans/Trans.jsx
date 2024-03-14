import { Box, Divider, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";

const Trans = () => {
  return (
    <Box>
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
          <Box>{/* <PeopleAltIcon sx={{ fontSize: 30 }} /> */}</Box>
        </ListItem>
        <Divider />
        <ListItem sx={{ justifyContent: "space-between" }}>
          <Stack>
            <Typography variant="h6" component={"p"}>
              21,000
            </Typography>
            <Typography variant="subtitle2">Per Today</Typography>
          </Stack>
          <Box>{/* <PeopleAltIcon sx={{ fontSize: 30 }} /> */}</Box>
        </ListItem>
        <Divider />
        <ListItem sx={{ justifyContent: "space-between" }}>
          <Stack>
            <Typography variant="h6" component={"p"}>
              $21.50
            </Typography>
            <Typography variant="subtitle2">AVG. Transactions</Typography>
          </Stack>
          <Box>{/* <PeopleAltIcon sx={{ fontSize: 30 }} /> */}</Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default Trans;
