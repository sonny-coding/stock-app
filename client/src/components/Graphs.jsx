import SearchButton from "./SearchButton";
import Trending from "./Trending";
import RevGrossOp from "./RevGrossOp";
import Income from "./Income";
import Growth from "./Growth";
import OperatingExpenses from "./OperatingExpenses";
import { getGrownthPercentage } from "../utils";

import { newData } from "../data/newData";

const Graphs = () => {
  const graphData = newData.incomeStatementHistory.incomeStatementHistory
    .map((year) => {
      return {
        year: year.endDate.fmt.split("-")[0],
        totalRevenue: year.totalRevenue.raw,
        grossProfit: year.grossProfit.raw,
        "R&D": year.researchDevelopment.raw,
        "SG&A": year.sellingGeneralAdministrative.raw,
        operatingIncome: year.operatingIncome.raw,
        netIncome: year.netIncome.raw,
      };
    })
    .reverse();

  console.log(graphData);
  return (
    <div className="grid w-full grid-cols-1 gap-2 px-1 pt-2 md:grid-cols-2">
      <div className="w-full h-auto text-center bg-blackjungle">
        <p className="mt-2">Income Statement</p>
        <RevGrossOp chart={graphData} />
      </div>
      <div className="w-full h-auto text-center bg-blackjungle">
        <p className="mt-2">Net Income</p>
        <Income chart={graphData} />
      </div>
      <div className="w-full h-auto text-center bg-blackjungle">
        <p className="mt-2">Gross Profit, OpEx</p>
        <OperatingExpenses chart={graphData} />
      </div>
      <div className="w-full h-auto text-center bg-blackjungle">
        <p className="mt-2">Margin</p>
        <Growth chart={getGrownthPercentage(graphData)} />
      </div>
      <div className="w-full h-auto">4</div>
    </div>
  );
};

export default Graphs;
