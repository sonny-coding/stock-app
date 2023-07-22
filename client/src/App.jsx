import { useState } from "react";
import Finance from "./components/Finance";
import Graphs from "./components/Graphs";
import SearchButton from "./components/SearchButton";
import SideBar from "./components/SideBar";
import Trending from "./components/Trending";
import { data } from "./data";
import useLocalStorage from "./hooks/useLocalStorage";
import { getSortedData } from "./utils";

/* 
Things to do:

fix margin
add more graphs
responsiveness
*/
const defaultTickers = ["msft", "amd"];
const App = () => {
  const sortedData = getSortedData(data.incomeStatementHistory.AMD);
  const [trending, setTrending] = useState(null);
  const [currentTicker, setCurrentTicker] = useState("AAPL");
  const [savedTickers, setSavedTickers] = useLocalStorage(
    "savedTickers",
    defaultTickers
  );
  // useState(() => {
  //   alert(currentTicker);
  // }, [currentTicker]);
  const handleStarClick = (ticker) => {
    if (!savedTickers.includes(ticker.toLowerCase())) {
      setSavedTickers((tickers) => {
        return [...tickers, ticker.toLowerCase()];
      });
    } else {
      setSavedTickers(
        savedTickers.filter((each) => {
          return each !== ticker.toLowerCase();
        })
      );
    }
  };

  // useEffect(() => {
  //   const fetchTicker = async () => {
  //     const options = {
  //       method: "GET",
  //       url: "https://yh-finance8.p.rapidapi.com/stock/get_financial_data",
  //       params: {
  //         symbol: "AAPL",
  //         region: "US",
  //       },
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "80fe7555dcmsh08c61cb32645a1ep15d440jsn9d1b3589bbf8",
  //         "X-RapidAPI-Host": "yh-finance8.p.rapidapi.com",
  //       },
  //     };
  //     try {
  //       const response = await axios.request(options);
  //       console.log("are we here");
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchTicker();
  // }, []);

  return (
    <div className="flex">
      {/* LEFT */}
      <SideBar savedTickers={savedTickers} handleStarClick={handleStarClick} />
      {/* MID */}
      <div className="w-full h-auto px-3 mx-auto text-base bg-night font-sourcecode text-yellow">
        <div className="w-full">
          <SearchButton />
          <Trending
            setCurrentTicker={setCurrentTicker}
            savedTickers={savedTickers}
            handleStarClick={handleStarClick}
            currentTicker={currentTicker}
          />
        </div>
        <Graphs />
      </div>
      {/* RIGHT */}
      <Finance handleStarClick={handleStarClick} savedTickers={savedTickers} />
    </div>
  );
};

export default App;
