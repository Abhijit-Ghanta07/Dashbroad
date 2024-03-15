import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const Sales = () => {
  return (
    <Box>
      <Grid container>
        <Grid item md={4}>
          <Typography variant="h6">Sales</Typography>
        </Grid>
      </Grid>
      <BarGraph />
    </Box>
  );
};

function BarGraph() {
  const DATA = [
    { name: "Total Sales", amount: 200 },
    { name: "Gross Sales", amount: 300 },
    { name: "Margin Sales", amount: 250 },
  ];
  const COLORS = ["#e2c044", "#2e5266", "#6e8898"];

  return (
    <Box sx={{ width: "100%", height: "200px" }}>
      <ResponsiveContainer>
        <PieChart>
          <Legend
            iconType="circle"
            iconSize={10}
            wrapperStyle={{ fontSize: 12 }}
          />
          <Pie
            data={DATA}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            fill="#82ca9d"
          >
            {DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <text
            x="50%"
            y="40%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={20}
          >
            20.35%
          </text>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={20}
          >
            AVG
          </text>
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default Sales;
