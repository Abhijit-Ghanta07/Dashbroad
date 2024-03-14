import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";

const Trans_Table = () => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h6">Last Transactions</Typography>

          <Stack direction={"row"} gap={2} py={2}>
            <Chip label="All" variant="filled" color="primary" />
            <Chip label="Success" variant="outlined" color="success" />
            <Chip label="Process" variant="outlined" color="info" />
            <Chip label="Failed" variant="outlined" color="error" />
          </Stack>
          <Stack py={2}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Avatar sx={{ width: 24, height: 24, bgcolor: "green" }}>
                M
              </Avatar>
              <Typography>Abhijit</Typography>
              <Typography>America</Typography>
              <Chip label="Paid" variant="filled" color="success" />
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Trans_Table;
