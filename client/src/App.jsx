import { useEffect, useState } from "react";
import Growth from "./components/Growth";
import Income from "./components/Income";
import RevGrossOp from "./components/RevGrossOp";
import Trending from "./components/Trending";
import SearchIcon from "./components/svg/SearchIcon";
import { data } from "./data";
import { getGrownthPercentage, getSortedData } from "./utils";
import axios from "axios";

const App = () => {
  const sortedData = getSortedData(data.incomeStatementHistory.AMD);
  const [trending, setTrending] = useState(null);
  const [currentTicker, setCurrentTicker] = useState("AAPL");

  useEffect(() => {
    const fetchTicker = async () => {
      const options = {
        method: "GET",
        url: "https://yh-finance8.p.rapidapi.com/stock/get_financial_data",
        params: {
          symbol: "AAPL",
          region: "US",
        },
        headers: {
          "X-RapidAPI-Key":
            "80fe7555dcmsh08c61cb32645a1ep15d440jsn9d1b3589bbf8",
          "X-RapidAPI-Host": "yh-finance8.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        console.log("are we here");
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTicker();
  }, []);

  // useEffect(() => {
  //   const fetchTrending = async () => {
  //     const options = {
  //       method: "GET",
  //       // params: { modules: "defaultKeyStatistics,assetProfile" },
  //       headers: {
  //         "x-api-key": import.meta.env.VITE_X_API_KEY,
  //       },
  //     };
  //     const response = await fetch(
  //       "https://yfapi.net/v1/finance/trending/US",
  //       options
  //     );
  //     const data = await response.json();
  //     setTrending(data?.finance?.result[0]?.quotes);
  //   };
  //   fetchTrending();
  // }, []);

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

  return (
    <div className="bg-night max-w-[1000px] w-full h-auto mx-auto text-base font-sourcecode text-yellow px-3">
      <button className="flex flex-row items-center w-full px-3 py-2 text-left rounded-lg bg-cinder cursor-text">
        <div className="w-4 h-4 mr-3">
          <SearchIcon />
        </div>
        Search...
      </button>
      <Trending
        // tickers={trending?.slice(0, 7)}
        setCurrentTicker={setCurrentTicker}
      />
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
