import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Legend,
  ResponsiveContainer,
  Sankey,
} from "recharts";

const SankeyChart = () => {
  const data = {
    nodes: [
      { name: "Revenue" },
      { name: "Gross Profit" },
      { name: "Cost of Revenue" },
      { name: "Operating Profit" },
      { name: "Operating Expenses" },
      { name: "Net Profit" },
      { name: "SG&A" },
      { name: "R&D" },
      { name: "Tax" },
    ],
    links: [
      { source: 0, target: 2, value: 20.4 },
      { source: 1, target: 3, value: 2.4 },
      { source: 1, target: 4, value: 2.1 },
      { source: 4, target: 6, value: 1.2 },
      { source: 4, target: 7, value: 0.9 },
      { source: 0, target: 1, value: 4.5 },
      { source: 3, target: 8, value: 0.3 },
      { source: 3, target: 5, value: 2.6 },
    ],
  };
  return (
    <ResponsiveContainer width="100%" height={300}>
      <Sankey
        data={data}
        nodePadding={30}
        linkCurvature={0.5}
        margin={{
          top: 20,
          right: 10,
          left: 0,
          bottom: 5,
        }}
        link={{ stroke: "#48b0ed" }}
      >
        <Tooltip />
        {/* <Label value="Pages of my website" offset={0} position="insideBottom" /> */}
      </Sankey>
    </ResponsiveContainer>
  );
};

export default SankeyChart;
