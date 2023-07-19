// import "./styles.css";
// import React from "react";
import { dataFormat } from "../utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// eslint-disable-next-line react/prop-types
export default function Income({ chart }) {
  const customStyle = { fontSize: "10px" };
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart
        // width={500}
        // height={300}
        data={chart}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} horizontal={false} />
        <XAxis style={customStyle} dataKey="time" stroke="#7d7d7d" />
        <YAxis
          style={customStyle}
          tickFormatter={dataFormat}
          stroke="#7d7d7d"
        />
        <Tooltip
          formatter={dataFormat}
          contentStyle={{ backgroundColor: "#121913" }}
          cursor={{ fill: "#121913", stroke: "#121913" }}
        />
        <Legend />
        <Bar dataKey="netIncome" stackId="a" fill="#48b0ed" />
      </BarChart>
    </ResponsiveContainer>
  );
}
