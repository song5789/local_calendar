import timeCompare from "./timeCompare";

export function getHolidayList(date) {
  return [
    {
      date: new Date(date.getFullYear(), 0, 1),
      name: "신정",
      isHoliday: true,
    },
    {
      date: new Date(date.getFullYear(), 1, 14),
      name: "발렌타인 데이",
      isHoliday: false,
    },
    {
      date: new Date(date.getFullYear(), 2, 1),
      name: "3.1절",
      isHoliday: true,
    },
    {
      date: new Date(date.getFullYear(), 2, 3),
      name: "납세자의 날",
      isHoliday: false,
    },
    {
      date: new Date(date.getFullYear(), 2, 8),
      name: "국제 여성의 날",
      isHoliday: false,
    },
    {
      date: new Date(date.getFullYear(), 2, 24),
      name: "서해수호의 날",
      isHoliday: false,
    },
    {
      date: new Date(date.getFullYear(), 2, 14),
      name: "화이트 데이",
      isHoliday: false,
    },
    {
      date: new Date(date.getFullYear(), 2, 22),
      name: "세계 물의 날",
      isHoliday: false,
    },
    {
      date: new Date(date.getFullYear(), 3, 5),
      name: "식목일",
      isHoliday: false,
    },
    {
      date: new Date(date.getFullYear(), 3, 11),
      name: "임시정부 수립일",
      isHoliday: false,
    },
    {
      date: new Date(date.getFullYear(), 3, 19),
      name: "4.19 혁명",
      isHoliday: false,
    },
    {
      date: new Date(date.getFullYear(), 4, 1),
      name: "근로자의 날",
      isHoliday: false,
    },
    {
      date: new Date(date.getFullYear(), 4, 5),
      name: "어린이날",
      isHoliday: true,
    },
    {
      date: new Date(date.getFullYear(), 4, 8),
      name: "어버이날",
      isHoliday: false,
    },
    {
      date: new Date(date.getFullYear(), 4, 15),
      name: "스승의 날",
      isHoliday: false,
    },
    {
      date: new Date(date.getFullYear(), 4, 18),
      name: "5.18 민주항쟁",
      isHoliday: false,
    },
    {
      date: new Date(date.getFullYear(), 5, 6),
      name: "현충일",
      isHoliday: true,
    },
    {
      date: new Date(date.getFullYear(), 5, 10),
      name: "6.10 민주항쟁기념일",
      isHoliday: false,
    },
    {
      date: new Date(date.getFullYear(), 5, 25),
      name: "6.25 전쟁일",
      isHoliday: false,
    },
    {
      date: new Date(date.getFullYear(), 6, 12),
      name: "정보보호의 날",
      isHoliday: false,
    },
    {
      date: new Date(date.getFullYear(), 6, 17),
      name: "제헌절",
      isHoliday: false,
    },
    {
      date: new Date(date.getFullYear(), 7, 15),
      name: "광복절",
      isHoliday: true,
    },
    {
      date: new Date(date.getFullYear(), 9, 1),
      name: "국군의 날",
      isHoliday: false,
    },
    {
      date: new Date(date.getFullYear(), 9, 3),
      name: "개천절",
      isHoliday: true,
    },
    {
      date: new Date(date.getFullYear(), 9, 9),
      name: "한글날",
      isHoliday: true,
    },
    {
      date: new Date(date.getFullYear(), 10, 11),
      name: "농업인의 날",
      isHoliday: false,
    },
    {
      date: new Date(date.getFullYear(), 11, 25),
      name: "성탄절",
      isHoliday: true,
    },
  ];
}

export default function isHoliday(date) {
  const holidays = getHolidayList(date);

  return holidays.filter((holiday) => timeCompare(date, holiday.date));
}
