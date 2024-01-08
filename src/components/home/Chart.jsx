import { Box, Tooltip } from "@mui/material";
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const DATA = [
  { name: "page A", amount: 200 },
  { name: "page B", amount: 300 },
  { name: "page c", amount: 250 },
  { name: "page d", amount: 420 },
  { name: "page d", amount: 400 },
  { name: "page d", amount: 250 },
  { name: "page d", amount: 300 },
  { name: "page A", amount: 200 },
  { name: "page B", amount: 300 },
];

const Chart = ({ color }) => {
  return (
    <Box sx={{ height: 60 }}>
      <ResponsiveContainer>
        <AreaChart data={DATA}>
          <defs>
            {/* <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient> */}
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgba(0,0,0,0.7)" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#ebfff1" stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <Tooltip /> */}
          <Area
            type="monotone"
            dataKey="amount"
            stroke={color}
            strokeWidth="2px"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
          {/* <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        /> */}
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Chart;
