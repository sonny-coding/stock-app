import { data } from "./data";
import { getSortedData, getGrownthPercentage } from "./utils";
import RevGrossOp from "./components/RevGrossOp";
import Income from "./components/Income";
import Growth from "./components/Growth";
import Search from "./components/Search";
const App = () => {
  const sortedData = getSortedData(data.incomeStatementHistory.AMD);

  const graphData = sortedData.map((element, index) => {
    for (const [key, value] of Object.entries(element)) {
      // console.log(`${key}: ${value.totalRevenue}`);
      return {
        time: index + 1 < sortedData.length ? key.split("-")[0] : "TTM",
        totalRevenue: value.totalRevenue,
        // costOfRevenue: value.costOfRevenue,
        grossProfit: value.grossProfit,
        // researchAndDevelopment: value.researchAndDevelopment,
        // sellingGeneralAndAdministration: value.sellingGeneralAndAdministration,
        operatingIncome: value.operatingIncome,
        netIncome: value.netIncome,
        // basicEPS: value.basicEPS,
      };
    }
  });
  console.log(graphData);
  console.log(getGrownthPercentage(graphData));
  return (
    <div className="mt-5 flex flex-wrap justify-center items-center">
      {/* <RevGrossOp chart={graphData} /> */}
      {/* <Income chart={graphData} /> */}
      {/* <Growth chart={getGrownthPercentage(graphData)} /> */}
      <Search />
    </div>
  );
};

export default App;
