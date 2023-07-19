import React from "react";
import useFetchTrendingData from "../hooks/useFetchTrendingData";

const Testing = () => {
  const { data, error, isLoading } = useFetchTrendingData();
  //   console.log("🚀 ~ file: Testing.jsx:6 ~ Testing ~ data:", data);

  return <div className="text-4xl">hello</div>;
};

export default Testing;
