import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { transactions_data } from "../../../constants/Constant";

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
          <Stack
            py={2}
            spacing={2}
            divider={<Divider orientation="horizontal" flexItem />}
          >
            {transactions_data.map((data, index) => {
              return (
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  p={2}
                  key={index}
                >
                  <Avatar
                    sx={{ width: 24, height: 24, bgcolor: "green" }}
                    src={data.avatar}
                  />

                  <Typography>{data.name}</Typography>
                  <Typography>{data.country}</Typography>
                  <Chip
                    label={data.payment_status}
                    variant="filled"
                    color={(() => {
                      if (data.payment_status == "paid") {
                        return "success";
                      } else if (data.payment_status == "failed") {
                        return "error";
                      } else {
                        return "secondary";
                      }
                    })()}
                  />
                </Stack>
              );
            })}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Trans_Table;
