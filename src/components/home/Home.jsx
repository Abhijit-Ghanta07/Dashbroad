import { useState } from "react";

import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { dashbroadCard } from "../../constants/constant";
import ChartCard from "./Chart";

const Home = () => {
  const COLORS = ["#FF004D", "#ffea00", "#F5F5DC", "#99ffb3"];
  const [tabVal, setTabVAl] = useState("one");
  return (
    <Box>
      <Container maxWidth="xl">
        <Typography py={2}>Dashbroad</Typography>
        <Grid container gap={2} justifyContent={"space-between"} my={2}>
          {dashbroadCard.map((card, i) => {
            return (
              <Grid xs item key={card.title}>
                <Card sx={{ minWidth: 300, flex: 1, p: 2 }}>
                  <Grid container>
                    <Grid xs item>
                      <Typography variant="body1">{card.title}</Typography>
                      <Typography variant="h5">{card.amount}</Typography>
                    </Grid>
                    <Grid xs item>
                      <ChartCard color={COLORS[i]} />
                      {card.hike ? (
                        <Typography
                          sx={{ color: "green", textAlign: "center" }}
                        >
                          {card.hike}
                        </Typography>
                      ) : (
                        <Typography sx={{ color: "red", textAlign: "center" }}>
                          {card.down}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Grid container spacing={2} my={2}>
          <Grid item xs={12} md={3}>
            <Card sx={{ py: 1 }}>
              <List>
                <ListItem>
                  <Typography>Overview</Typography>
                </ListItem>
                <Divider />
                <ListItem sx={{ justifyContent: "space-between" }}>
                  <Stack>
                    <Typography variant="h6">121,000</Typography>
                    <Typography variant="body1">Total Visitors</Typography>
                  </Stack>
                  <Box>
                    <PeopleAltIcon sx={{ fontSize: 30 }} />
                  </Box>
                </ListItem>
                <Divider />
                <ListItem sx={{ justifyContent: "space-between" }}>
                  <Stack>
                    <Typography variant="h6">21,000</Typography>
                    <Typography variant="body1">Total Products</Typography>
                  </Stack>
                  <Box>
                    <PeopleAltIcon sx={{ fontSize: 30 }} />
                  </Box>
                </ListItem>
                <Divider />
                <ListItem sx={{ justifyContent: "space-between" }}>
                  <Stack>
                    <Typography variant="h6">$21.50</Typography>
                    <Typography variant="body1">Revenue Per Visitor</Typography>
                  </Stack>
                  <Box>
                    <PeopleAltIcon sx={{ fontSize: 30 }} />
                  </Box>
                </ListItem>
              </List>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item md={4}>
                    <Typography>Revenue</Typography>
                  </Grid>
                  <Grid item md={8}>
                    <Tabs
                      textColor="primary"
                      indicatorColor="primary"
                      value={tabVal}
                    >
                      <Tab value="one" label="Today" />

                      <Tab value="two" label="7D" />

                      <Tab value="three" label="15D" />

                      <Tab value="four" label="1M" />

                      <Tab value="five" label="1Y" />
                    </Tabs>
                  </Grid>
                </Grid>
                <Areachart />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ py: 1 }}>
              <CardContent>
                <Typography>Targets</Typography>
                <Barchart />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;

function Areachart() {
  const DATA = [
    { name: "page A", amount: 200 },
    { name: "page B", amount: 300 },
    { name: "page c", amount: 250 },
    { name: "page d", amount: 420 },
    { name: "page e", amount: 400 },
    { name: "page f", amount: 250 },
    { name: "page g", amount: 300 },
    { name: "page h", amount: 200 },
    { name: "page i", amount: 300 },
    { name: "page A", amount: 200 },
    { name: "page B", amount: 300 },
    { name: "page c", amount: 250 },
    { name: "page d", amount: 420 },
    { name: "page e", amount: 400 },
    { name: "page f", amount: 250 },
    { name: "page g", amount: 300 },
    { name: "page h", amount: 200 },
    { name: "page i", amount: 300 },
  ];
  return (
    <Box sx={{ width: "100%", height: "200px" }}>
      <ResponsiveContainer>
        <AreaChart data={DATA}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#aeff00" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#aeff00" stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* <XAxis dataKey="name" /> */}
          <YAxis tickLine={false} axisLine={false} />
          <CartesianGrid
            horizontal={true}
            vertical={false}
            strokeDasharray="1"
          />
          {/* <Tooltip  /> */}
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#aeff00"
            strokeWidth="2px"
            fillOpacity={0.5}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}

function Barchart() {
  const DATA = [
    { name: "page A", amount: 200 },
    { name: "page B", amount: 300 },
    { name: "page c", amount: 250 },
    { name: "page d", amount: 420 },
    { name: "page e", amount: 400 },
  ];
  return (
    <Box sx={{ width: "100%", height: "200px", py: 2 }}>
      <ResponsiveContainer>
        <BarChart data={DATA}>
          <CartesianGrid vertical={false} strokeDasharray="1" />
          <XAxis dataKey="name" />
          <YAxis tickLine={false} axisLine={false} />
          <Bar dataKey="amount" fill="#ffea00" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
