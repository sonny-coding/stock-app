// import "./styles.css";
// import React from "react";
import { dataFormat } from "../utils";
import {
  //   BarChart,
  //   Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  LineChart,
} from "recharts";

// eslint-disable-next-line react/prop-types
export default function Growth({ chart }) {
  return (
    <LineChart
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
      <YAxis />
      <Tooltip formatter={dataFormat} />
      <Legend />
      {/* <Bar dataKey="netIncome" stackId="a" fill="#8884d8" /> */}
      <Line
        type="monotone"
        dataKey="grossMargin"
        stroke="#8884d8"
        strokeWidth={2}
      />
      <Line
        type="monotone"
        dataKey="operatingMargin"
        stroke="#f2f"
        strokeWidth={2}
      />
      <Line
        type="monotone"
        dataKey="incomeMargin"
        stroke="#82ca9d"
        strokeWidth={2}
      />
    </LineChart>
  );
}
