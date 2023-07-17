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
  ResponsiveContainer,
} from "recharts";

// eslint-disable-next-line react/prop-types
export default function Growth({ chart }) {
  const customStyle = { fontSize: "12px" };

  return (
    <ResponsiveContainer width="100%" height={300}>
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
        <XAxis style={customStyle} stroke="white" dataKey="time" />
        <YAxis
          style={customStyle}
          stroke="white"
          tickFormatter={(tick) => {
            return `${tick}%`;
          }}
        />
        <Tooltip
          formatter={dataFormat}
          contentStyle={{ backgroundColor: "#121913" }}
          cursor={{ fill: "#121913", stroke: "#121913" }}
        />
        <Legend />
        {/* <Bar dataKey="netIncome" stackId="a" fill="#8884d8" /> */}
        <Line
          type="monotone"
          dataKey="grossMargin"
          stroke="#007cc3"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="operatingMargin"
          stroke="#7ac142"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="incomeMargin"
          stroke="#fdbb2f"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
