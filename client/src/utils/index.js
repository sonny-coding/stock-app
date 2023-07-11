export const dataFormat = (number) => {
  if (number > 1000000000) {
    return `$ ${(number / 1000000000).toString()}B`;
  } else if (number > 1000000) {
    return `$ ${(number / 1000000).toString()}M`;
  } else if (number > 1000) {
    return `$ ${(number / 1000).toString()}K`;
  } else {
    return number.toString();
  }
};
export const getSortedData = (data) => {
  const sortedData = data.sort((a, b) => {
    const keyA = Object.keys(a);
    const keyB = Object.keys(b);
    if (keyA < keyB) {
      return -1;
    }
    if (keyB > keyA) {
      return 1;
    }
    return 0;
  });
  return sortedData;
};

export const getGrownthPercentage = (data) => {
  const growth = data.map((ele) => {
    return {
      time: ele.time,
      grossMargin: ((ele.grossProfit / ele.totalRevenue) * 100).toFixed(2),
      operatingMargin: ((ele.operatingIncome / ele.totalRevenue) * 100).toFixed(
        2
      ),
      incomeMargin: ((ele.netIncome / ele.totalRevenue) * 100).toFixed(2),
    };
  });
  return growth;
};
