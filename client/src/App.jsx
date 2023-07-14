import { data } from "./data";
import { getSortedData, getGrownthPercentage } from "./utils";
import RevGrossOp from "./components/RevGrossOp";
import Income from "./components/Income";
import Growth from "./components/Growth";
import Search from "./components/Search";
import SearchIcon from "./components/svg/SearchIcon";
import { tickers } from "./data/recent";
import RecentTicker from "./components/RecentTicker";
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
    <div className="bg-night max-w-[1000px] w-full h-auto mx-auto text-base font-sourcecode text-yellow px-3">
      {/* <RevGrossOp chart={graphData} /> */}
      <button className="flex flex-row items-center w-full px-3 py-2 text-left rounded-lg bg-cinder cursor-text">
        <div className="w-4 h-4 mr-3">
          <SearchIcon />
        </div>
        Search...
      </button>
      <div className="flex flex-row items-center w-full gap-3 mt-3">
        {tickers.map((ticker) => {
          return <RecentTicker key={ticker} ticker={ticker} />;
        })}
      </div>
      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
        <div className="w-full h-auto">
          <RevGrossOp chart={graphData} />
        </div>
        <div className="w-full h-auto">
          <Income chart={graphData} />
        </div>
        <div className="w-full h-auto">
          <Growth chart={getGrownthPercentage(graphData)} />
        </div>
        <div className="w-full h-auto">4</div>
      </div>
    </div>
  );
};

export default App;
