// eslint-disable-next-line react/prop-types
function SearchIcon({ color = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
      ></path>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M338.29 338.29L448 448"
      ></path>
    </svg>
  );
}

export default SearchIcon;
