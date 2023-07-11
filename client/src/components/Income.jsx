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
} from "recharts";

// eslint-disable-next-line react/prop-types
export default function Income({ chart }) {
  return (
    <BarChart
      width={500}
      height={300}
      data={chart}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid vertical={false} horizontal={false} />
      <XAxis dataKey="time" />
      <YAxis tickFormatter={dataFormat} />
      <Tooltip formatter={dataFormat} />
      <Legend />
      <Bar dataKey="netIncome" stackId="a" fill="#8884d8" />
    </BarChart>
  );
}
