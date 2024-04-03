import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { sales_history } from "../../../constants/Constant";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const Demograph = () => {
  return (
    <Box>
      <Card sx={{ fontFamily: "russo" }}>
        <CardContent>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="h6" sx={{ fontFamily: "russo" }}>
              Last Sales
            </Typography>
            <Button variant="contained" color="success">
              Next
            </Button>
          </Stack>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontFamily: "russo" }}>Product</TableCell>
                  <TableCell sx={{ fontFamily: "russo" }}>Status</TableCell>
                  <TableCell sx={{ fontFamily: "russo" }}>Price</TableCell>
                  <TableCell sx={{ fontFamily: "russo" }}>Amount</TableCell>
                  <TableCell sx={{ fontFamily: "russo" }}>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sales_history.map((row) => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell sx={{ fontFamily: "russo" }}>
                        <Stack direction={"row"} gap={2} useFlexGap>
                          <Avatar
                            src={row.img}
                            alt="product imgage"
                            sx={{ width: "25px", height: "25px" }}
                            variant="square"
                          />
                          {row.productName}
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Chip
                          variant="filled"
                          color="success"
                          label={row.status}
                          sx={{ fontFamily: "russo" }}
                        />
                      </TableCell>
                      <TableCell sx={{ fontFamily: "russo" }}>
                        {row.price}
                      </TableCell>
                      <TableCell sx={{ fontFamily: "russo" }}>
                        {row.amount}
                      </TableCell>
                      <TableCell sx={{ fontFamily: "flick" }}>
                        {row.date}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Demograph;
