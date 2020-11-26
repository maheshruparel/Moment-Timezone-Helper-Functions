const getDurationYMD = (smallDate, bigDate, includeBothDates) => {
  smallDate = moment(smallDate);
  bigDate = moment(bigDate);

  if (includeBothDates) {
    bigDate.add(1, 'day');
  }
  let years = bigDate.diff(smallDate, 'years');
  smallDate.add(years, 'years');
  let months = bigDate.diff(smallDate, 'months');
  smallDate.add(months, 'months');
  let days = bigDate.diff(smallDate, 'days');
  smallDate.add(days, 'days');
  return { years, months, days };
};

