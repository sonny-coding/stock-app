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
  const url = "https://yfapi.net/v1/finance/trending/US";
  const { data, error, isLoading } = useSWR(url, fetcher);
  return {
    data: data,
    isError: error,
    isLoading,
  };
};

export default useFetchTrending;
