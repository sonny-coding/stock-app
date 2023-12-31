import React from "react";
import { aapl } from "../data";
import StarIcon from "./svg/StarIcon";
import { tickers } from "../data/recent";

const Finance = ({ handleStarClick, savedTickers }) => {
  const data = aapl.quoteResponse.result[0];

  return (
    <div className="w-[25%] bg-cinder p-3 text-center text-white flex flex-col gap-2">
      <div className="w-full p-5 rounded-sm bg-blackjungle hover:cursor-pointer">
        <div className="flex flex-row justify-center gap-3">
          <p className="text-2xl text-yellow">{data.symbol}</p>
          <div
            onClick={() => {
              handleStarClick(data.symbol);
            }}
            className={`flex justify-center w-5 ${
              savedTickers.includes(data.symbol.toLowerCase())
                ? "text-yellow hover:text-white"
                : "text-white hover:text-yellow"
            }`}
          >
            <StarIcon />
          </div>
        </div>
        <p>{data.shortName}</p>
      </div>
      <div
        className={`w-full p-5 rounded-sm ${
          data.regularMarketChangePercent >= 0 ? "bg-blackgreen" : "bg-blackred"
        }`}
      >
        <p className="text-xs text-gray">Regular Market Price:</p>
        <p className="text-base">{data.regularMarketPrice}</p>
        <p
          className={`text-sm ${
            data.regularMarketChangePercent >= 0 ? "text-green" : "text-red"
          }`}
        >
          {data.regularMarketChangePercent.toFixed(2)}%
        </p>
      </div>
      <div className="w-full p-5 rounded-sm bg-blackjungle">
        <p className="text-xs text-gray">Market Cap:</p>
        <p className="text-base">$ 3.1T</p>
      </div>
      <div
        className={`w-full p-5 rounded-sm ${
          data.forwardPE >= 0 ? "bg-blackgreen" : "bg-blackred"
        }`}
      >
        <p className="text-xs text-gray">Forward P/E Ratio:</p>
        <p
          className={`text-sm ${
            data.forwardPE >= 0 ? "text-green" : "text-red"
          }`}
        >
          {data.forwardPE.toFixed(2)}
        </p>
      </div>
      <div
        className={`w-full p-5 rounded-sm ${
          data.fiftyDayAverageChangePercent >= 0
            ? "bg-blackgreen"
            : "bg-blackred"
        }`}
      >
        <p className="text-xs text-gray">SMA 50:</p>
        <p
          className={`text-sm ${
            data.fiftyDayAverageChangePercent >= 0 ? "text-green" : "text-red"
          }`}
        >
          {(data.fiftyDayAverageChangePercent * 100).toFixed(2)}%
        </p>
      </div>
      <div
        className={`w-full p-5 rounded-sm ${
          data.twoHundredDayAverageChangePercent >= 0
            ? "bg-blackgreen"
            : "bg-blackred"
        }`}
      >
        <p className="text-xs text-gray">SMA 200:</p>
        <p
          className={`text-sm ${
            data.twoHundredDayAverageChangePercent >= 0
              ? "text-green"
              : "text-red"
          }`}
        >
          {(data.twoHundredDayAverageChangePercent * 100).toFixed(2)}%
        </p>
      </div>
      <div
        className={`w-full p-5 rounded-sm ${
          data.trailingAnnualDividendYield >= 0
            ? "bg-blackgreen"
            : "bg-blackred"
        }`}
      >
        <p className="text-xs text-gray">Dividend %: </p>
        <p className="text-base text-green">
          {(data.trailingAnnualDividendYield * 100).toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

export default Finance;
