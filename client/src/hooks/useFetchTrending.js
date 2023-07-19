import useSWR from "swr";

const options = {
  method: "GET",
  // params: { modules: "defaultKeyStatistics,assetProfile" },
  headers: {
    "x-api-key": import.meta.env.VITE_X_API_KEY,
  },
};

const fetcher = (...args) => fetch(...args, options).then((res) => res.json());
const useFetchTrending = () => {
  const trendingUrl = "https://yfapi.net/v1/finance/trending/US";
  const dataUrl =
    "https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AMD%2CAAPL";
  const { data: tickers } = useSWR(trendingUrl, fetcher);
  const {
    data: result,
    error,
    isLoading,
  } = useSWR(tickers ? dataUrl : null, fetcher);
  return {
    // data: data?.finance?.result[0]?.quotes,
    result,
    error,
    isLoading,
  };
};

export default useFetchTrending;
