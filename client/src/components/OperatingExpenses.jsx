import React from "react";
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
import { dataFormat } from "../utils";

export default function OperatingExpenses({ chart }) {
  const customStyle = { fontSize: "10px" };
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart
        // width={500}
        // height={300}
        data={chart}
        margin={{
          top: 20,
          right: 10,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} horizontal={false} />
        <XAxis style={customStyle} dataKey="year" stroke="#7d7d7d" />
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
        <Legend wrapperStyle={{ fontSize: "11px" }} />
        <Bar dataKey="grossProfit" stackId="a" fill="#db864a" />
        <Bar dataKey="R&D" stackId="b" fill="#1b57ed" />
        <Bar dataKey="SG&A" stackId="b" fill="#48b0ed" />
      </BarChart>
    </ResponsiveContainer>
  );
}
