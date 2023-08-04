export function getCurrentMonthObject(today, month) {
  const currentMonthFirstDate = new Date(today.getFullYear(), month, 1);
  const currentMonthLastDate = new Date(today.getFullYear(), month + 1, 0);
  const currentMonthFirstDay = currentMonthFirstDate.getDay();
  const currentMonthLastDay = currentMonthLastDate.getDay();

  return {
    currentMonthFirstDate,
    currentMonthLastDate,
    currentMonthFirstDay,
    currentMonthLastDay,
  };
}

export function getPrevMonthObject(current) {
  const prevMonthLastDate = new Date(current.getFullYear(), current.getMonth(), 0);
  const prevMonthLastDay = prevMonthLastDate.getDay();

  return {
    prevMonthLastDate,
    prevMonthLastDay,
  };
}

export function getNextMonthObject(current) {
  const nextMonthFirstDate = new Date(current.getFullYear(), current.getMonth() + 1, 1);
  return {
    nextMonthFirstDate,
  };
}

export function drawMonthWithDateObj(current, prev, next) {
  let monthArray = [];
  const { prevMonthLastDate, prevMonthLastDay } = prev;
  const { currentMonthFirstDate, currentMonthLastDate, currentMonthFirstDay, currentMonthLastDay } = current;
  const { nextMonthFirstDate } = next;
  let prevDate = prevMonthLastDate.getDate() - prevMonthLastDay - 1;
  let nextDate = nextMonthFirstDate.getDate() - 1;

  for (let i = 0; i < currentMonthFirstDay; i++) {
    prevDate += 1;
    monthArray.push({
      date: new Date(prevMonthLastDate.getFullYear(), prevMonthLastDate.getMonth(), prevDate),
      class: "calendar__button__disable",
    });
  }
  for (let i = 1; i <= currentMonthLastDate.getDate(); i++) {
    monthArray.push({
      date: new Date(currentMonthFirstDate.getFullYear(), currentMonthFirstDate.getMonth(), i),
      class: null,
    });
  }
  for (let i = 1; i <= 6 - currentMonthLastDay; i++) {
    nextDate += 1;
    monthArray.push({
      date: new Date(nextMonthFirstDate.getFullYear(), nextMonthFirstDate.getMonth(), nextDate),
      class: "calendar__button__disable",
    });
  }

  return monthArray;
}
