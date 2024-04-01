import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { deepOrange, green } from "@mui/material/colors";
import { trans_history } from "../../../constants/Constant";

const Trans_Table = () => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="h6">Last Transactions</Typography>
            <Button variant="contained" color="success">
              Next
            </Button>
          </Stack>

          <Stack gap={2} useFlexGap py={2}>
            {trans_history.map((row) => {
              return (
                <Stack
                  key={row.id}
                  direction={"row"}
                  gap={2}
                  alignItems={"center"}
                >
                  <Avatar variant="rounded" sx={{ bgcolor: green[400] }}>
                    {row.icon}
                  </Avatar>
                  <Typography>{row.name}</Typography>
                  <Typography>{row.time}</Typography>
                  <Typography>{row.amount}</Typography>
                </Stack>
              );
            })}
          </Stack>
          {/* <Stack divider={<Divider orientation="horizontal" flexItem />}>
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
          </Stack> */}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Trans_Table;
