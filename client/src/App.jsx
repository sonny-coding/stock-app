import { data } from "./data";
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

  const graphData = sortedData.map((element) => {
    for (const [key, value] of Object.entries(element)) {
      // console.log(`${key}: ${value.totalRevenue}`);
      return {
        time: key,
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
    <div>hello</div>
    //   <div className="text-3xl">
    //     <p>Revenue: {data.totalRevenue.toLocaleString()}</p>
    //     {/* <p>Total cost of Sxales {data.costOfRevenue.toLocaleString()}</p> */}
    //     <p>Gross Profit: {data.grossProfit.toLocaleString()}</p>
    //     {/* <p>
    //       Gross Margin:{" "}
    //       {((data.grossProfit * 100) / data.totalRevenue).toFixed(2)}%
    //     </p> */}

    //     {/* <p>Operating Expense: {data.operatingExpense.toLocaleString()}</p> */}
    //     <p>Operating Income: {data.operatingIncome.toLocaleString()}</p>
    //     {/* <p>
    //       Net Income:{" "}
    //       {((data.operatingIncome * 100) / data.totalRevenue).toFixed(2)}%
    //     </p> */}
    //     <p>Net Income: {data.netIncome.toLocaleString()}</p>
    //   </div>
    // );
  );
};

export default App;
