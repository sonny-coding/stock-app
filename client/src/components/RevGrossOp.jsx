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
  Label,
} from "recharts";

// eslint-disable-next-line react/prop-types
export default function RevGrossOp({ chart }) {
  const customStyle = { fontSize: "10px" };
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
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
          contentStyle={{ backgroundColor: "#121913", fontSize: "14px" }}
          cursor={{ fill: "#121913", stroke: "#121913" }}
        />
        <Legend />

        <Bar dataKey="totalRevenue" stackId="a" fill="#48b0ed" />
        <Bar dataKey="grossProfit" stackId="b" fill="#1b57ed" />
        <Bar dataKey="operatingIncome" stackId="c" fill="#db864a" />
      </BarChart>
    </ResponsiveContainer>
  );
}
