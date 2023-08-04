export default function timeCompare(today, date) {
  let setMidNight = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  return setMidNight.getTime() === date.getTime() ? true : false;
}
