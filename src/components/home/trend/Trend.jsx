import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Legend,
  ResponsiveContainer,
  Text,
  XAxis,
  YAxis,
} from "recharts";

const Trend = () => {
  return (
    <Box>
      <Grid container>
        <Grid item md={4}>
          <Typography variant="h6">Trend</Typography>
        </Grid>
      </Grid>
      <AreaGraph />
    </Box>
  );
};

function AreaGraph() {
  const DATA = [
    { name: "Jan", new: 200, visit: 250, active: 230 },
    { name: "Feb", new: 180, visit: 200, active: 270 },
    { name: "Mar", new: 270, visit: 200, active: 290 },
    { name: "Apr", new: 230, visit: 160, active: 250 },
    { name: "May", new: 200, visit: 220, active: 270 },
    { name: "Jun", new: 300, visit: 190, active: 300 },
    { name: "Jul", new: 320, visit: 270, active: 170 },
    { name: "Aug", new: 230, visit: 240, active: 160 },
  ];
  // colors:#e2c044,#2e5266,#6e8898
  return (
    <Box sx={{ width: "100%", height: "200px" }}>
      <ResponsiveContainer>
        <BarChart data={DATA} barGap={1}>
          <CartesianGrid strokeDasharray="1" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis unit={"k"} tickLine={false} axisLine={false} />
          <Text>Trend</Text>
          <Legend
            verticalAlign="top"
            iconType="circle"
            align="right"
            wrapperStyle={{
              textTransform: "capitalize",
              paddingBottom: "1rem",
            }}
          />
          <Label value="Trend" position="top" />
          <Bar dataKey="new" fill="#e2c044" />
          <Bar dataKey="visit" fill="#2e5266" />
          <Bar dataKey="active" fill="#6e8898" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default Trend;
