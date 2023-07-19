import useSWR from "swr";
import { getParams } from "../utils";

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
    "https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=";
  // fetch trending tickers
  const { data: tickers } = useSWR(trendingUrl, fetcher);
  // fetch trending tickers data
  const { data, error, isLoading } = useSWR(
    tickers ? dataUrl + getParams(tickers?.finance?.result[0]?.quotes) : null,
    fetcher
  );
  return {
    // data: data?.finance?.result[0]?.quotes,
    data: data?.quoteResponse?.result,
    error,
    isLoading,
  };
};

export default useFetchTrending;
