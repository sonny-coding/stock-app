import { useEffect, useState } from "react";
import Growth from "./components/Growth";
import Income from "./components/Income";
import RevGrossOp from "./components/RevGrossOp";
import Trending from "./components/Trending";
import SearchIcon from "./components/svg/SearchIcon";
import { data } from "./data";
import { getGrownthPercentage, getSortedData, getParams } from "./utils";
import axios from "axios";
import Testing from "./components/Testing";
import SearchButton from "./components/SearchButton";

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
    <div className="flex">
      {/* LEFT */}
      <div className="w-[10%] bg-blackjungle">Side</div>
      {/* MID */}
      <div className="w-full h-auto px-3 mx-auto text-base bg-night font-sourcecode text-yellow">
        <div className="w-full">
          <SearchButton />
          <Trending setCurrentTicker={setCurrentTicker} />
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
      {/* RIGHT */}
      <div className="w-[25%] bg-cinder p-3 text-center text-white flex flex-col gap-2">
        <div className="w-full p-5 rounded-sm bg-blackjungle hover:opacity-90 hover:cursor-pointer">
          <p className="text-xl text-yellow">AAPL</p>
          <p>Apple Inc.</p>
        </div>
        <div className="w-full p-5 rounded-sm bg-blackjungle">
          <p className="text-xs text-gray">Regular Market Price:</p>
          <p className="text-base">192.22</p>
          <p className="text-sm text-green">1.21%</p>
        </div>
        <div className="w-full p-5 rounded-sm bg-blackjungle">
          <p className="text-xs text-gray">Market Cap:</p>
          <p className="text-base">$ 3.1T</p>
        </div>
        <div className="w-full p-5 rounded-sm bg-blackred">
          <p className="text-xs text-gray">Forward P/E Ratio:</p>
          <p className="text-base text-red">31.22</p>
        </div>
        <div className="w-full p-5 rounded-sm bg-blackgreen">
          <p className="text-xs text-gray">SMA 50:</p>
          <p className="text-base text-green">13.2%</p>
        </div>
        <div className="w-full p-5 rounded-sm bg-blackgreen">
          <p className="text-xs text-gray">SMA 200:</p>
          <p className="text-base text-green">22.19%</p>
        </div>
      </div>
    </div>
  );
};

export default App;
