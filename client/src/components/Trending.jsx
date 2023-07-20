import useFetchTrending from "../hooks/useFetchTrending";
import useFetchTrendingData from "../hooks/useFetchTrendingData";
import { getParams } from "../utils";
import { trendingDaily } from "../data";

const Trending = ({ setCurrentTicker }) => {
  // const { data: tickers, isLoading, error } = useFetchTrending();

  // if (error) {
  //   return <div>failed to load</div>;
  // }
  // if (isLoading) {
  //   return <div>loading...</div>;
  // }

  return (
    <div className="mt-5">
      <div className="flex flex-row items-center w-full gap-3 mt-5">
        {trendingDaily?.quoteResponse?.result.slice(0, 7).map((ticker) => {
          return (
            <div
              onClick={setCurrentTicker(ticker.symbol)}
              key={ticker.symbol}
              className={`peer w-full max-w-[140px] h-auto text-white px-5 p-2 hover:cursor-pointer ${
                ticker.regularMarketChangePercent >= 0
                  ? "bg-blackgreen"
                  : "bg-blackred"
              }`}
            >
              <p>{ticker.symbol}</p>
              <div
                className={`${
                  ticker.regularMarketChange >= 0 ? "text-green" : "text-red"
                }`}
              >
                <p className="text-xs">
                  {ticker.regularMarketPrice.toFixed(2)}
                </p>
                <p className={`text-xs`}>
                  {ticker.regularMarketChangePercent.toFixed(2)}%
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
