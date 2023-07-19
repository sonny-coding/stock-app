import React from "react";
import SearchIcon from "./svg/SearchIcon";

const SearchButton = () => {
  return (
    <button className="flex flex-row items-center w-full px-3 py-2 text-left rounded-lg bg-cinder cursor-text">
      <div className="w-4 h-4 mr-3">
        <SearchIcon />
      </div>
      Search...
    </button>
  );
};

export default SearchButton;
