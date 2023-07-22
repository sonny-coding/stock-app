import React from "react";
import StarIcon from "./svg/StarIcon";

const SideBar = ({ savedTickers, handleStarClick }) => {
  return (
    <div className="w-[10%] bg-blackjungle text-white">
      <ul className="mt-20 [&>*]:mt-3">
        {savedTickers.map((ticker) => {
          return (
            <li className="flex" key={ticker}>
              <div
                onClick={() => {
                  handleStarClick(ticker);
                }}
                className={`flex justify-center w-4 mx-2 hover:cursor-pointer text-yellow hover:text-white`}
              >
                <StarIcon />
              </div>
              <span className="hover:cursor-pointer">{ticker}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
