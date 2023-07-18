import useSWR from "swr";

const fetcher = async (...args) => {
  const response = await fetch(...args);
  const data = await response.json();
  return data;
};
const useFetch = (url) => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  return {
    myData: data,
    isError: error,
    isLoading,
  };
};

export default useFetch;
