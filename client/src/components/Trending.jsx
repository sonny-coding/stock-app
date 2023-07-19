import useFetchTrending from "../hooks/useFetchTrending";
import useFetchTrendingData from "../hooks/useFetchTrendingData";
import { getParams } from "../utils";

const Trending = ({ setCurrentTicker }) => {
  const { data: tickers } = useFetchTrending();
  const { data, error, isLoading } = useFetchTrendingData();

  if (tickers) {
    // const myResult = getParams(tickers.slice(0, 10));
    // console.log(myResult);
  }

  // if (error) {
  //   return <div>failed to load</div>;
  // }
  // if (isLoading) {
  //   return <div>loading...</div>;
  // }

  return (
    <div className="mt-5">
      <div className="flex flex-row items-center w-full gap-3 mt-5">
        {tickers?.slice(0, 7).map((ticker) => {
          return (
            <div
              onClick={setCurrentTicker(ticker.symbol)}
              key={ticker.symbol}
              className="w-full max-w-[140px] h-[60px] bg-blackgreen text-white px-5 p-2 hover:cursor-pointer hover:text-green"
            >
              {ticker.symbol}
            </div>
          );
        })}
      </div>
      {data?.map((data) => {
        return <div>{data.symbol}</div>;
      })}
      <p>Trending Tickers</p>
    </div>
  );
};

export default Trending;
