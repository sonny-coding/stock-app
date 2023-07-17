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
export default function RevGrossOp({ chart }) {
  const customStyle = { fontSize: "12px" };
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
        <XAxis style={customStyle} dataKey="time" stroke="white" />
        <YAxis style={customStyle} tickFormatter={dataFormat} stroke="white" />
        <Tooltip
          formatter={dataFormat}
          contentStyle={{ backgroundColor: "#121913" }}
          cursor={{ fill: "#121913", stroke: "#121913" }}
        />
        <Legend />
        <Bar dataKey="totalRevenue" stackId="a" fill="#007cc3" />
        <Bar dataKey="grossProfit" stackId="b" fill="#36C190" />
        <Bar dataKey="operatingIncome" stackId="c" fill="#E09F1F" />
      </BarChart>
    </ResponsiveContainer>
  );
}
