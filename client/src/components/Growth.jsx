// import "./styles.css";
// import React from "react";
import { dataFormat } from "../utils";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
} from "recharts";

// eslint-disable-next-line react/prop-types
export default function Growth({ chart }) {
  const customStyle = { fontSize: "10px" };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={500}
        height={300}
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
          stroke="#7d7d7d"
          tickFormatter={(tick) => {
            return `${tick}%`;
          }}
        />
        <Tooltip
          formatter={dataFormat}
          contentStyle={{ backgroundColor: "#121913", fontSize: "14px" }}
          cursor={{ fill: "#121913", stroke: "#121913" }}
        />
        <Legend wrapperStyle={{ fontSize: "11px" }} />
        <Line
          type="monotone"
          dataKey="grossMargin"
          stroke="#48b0ed"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="operatingMargin"
          stroke="#1b57ed"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="incomeMargin"
          stroke="#db864a"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
