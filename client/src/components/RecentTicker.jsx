// eslint-disable-next-line react/prop-types
const RecentTicker = ({ ticker }) => {
  return (
    <div className="w-full max-w-[140px] h-[135px] bg-blackgreen text-white px-5 p-2 hover:cursor-pointer hover:text-green">
      {ticker}
    </div>
  );
};

export default RecentTicker;
