import { data } from "./data";
import Chart from "./components/Chart";
const App = () => {
  const sortedData = data.incomeStatementHistory.AMD.sort((a, b) => {
    const keyA = Object.keys(a);
    const keyB = Object.keys(b);
    if (keyA < keyB) {
      return -1;
    }
    if (keyB > keyA) {
      return 1;
    }
    return 0;
  });

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
  return (
    <div className="mt-5 flex justify-center items-center">
      <Chart className="" chart={graphData} />
    </div>
  );
};

export default App;
