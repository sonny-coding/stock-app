import useFetchTrending from "../hooks/useFetchTrending";

const Trending = ({ setCurrentTicker }) => {
  const { data, error, isLoading } = useFetchTrending();
  console.log("🚀 ~ file: Trending.jsx:5 ~ Trending ~ data:", data);

  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="mt-5">
      <div className="flex flex-row items-center w-full gap-3 mt-5">
        {/* {tickers?.map((ticker) => {
          return (
            <div
              onClick={setCurrentTicker(ticker.symbol)}
              key={ticker.symbol}
              className="w-full max-w-[140px] h-[60px] bg-blackgreen text-white px-5 p-2 hover:cursor-pointer hover:text-green"
            >
              {ticker.symbol}
            </div>
          );
        })} */}
        {data.message}
      </div>
      <p>Trending Tickers</p>
    </div>
  );
};

export default Trending;
