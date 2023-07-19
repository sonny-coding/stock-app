import useSWR from "swr";

const options = {
  method: "GET",
  // params: { modules: "defaultKeyStatistics,assetProfile" },
  headers: {
    "x-api-key": import.meta.env.VITE_X_API_KEY,
  },
};

const fetcher = (...args) => fetch(...args, options).then((res) => res.json());
// const fetcher = async (args) => {
//   const response = await fetch(args);
//   const data = await response.json();
//   return data;
// };
const useFetchTrendingData = () => {
  const url =
    "https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AMD%2CAAPL";
  const { data, error, isLoading } = useSWR(url, fetcher);
  return {
    data: data?.quoteResponse?.result,
    error,
    isLoading,
  };
};

export default useFetchTrendingData;
