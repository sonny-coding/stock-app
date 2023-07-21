import React from "react";

function StarIcon({ color = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionStar"
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="32"
        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
      ></path>
    </svg>
  );
}

export default StarIcon;
