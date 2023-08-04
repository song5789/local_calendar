import { useDispatch } from "../Context/ScheduleContext";

export default function CalendarHead({ currentMonth, increaseMonth, decreaseMonth }) {
  return (
    <div className="calendar__head">
      <button onClick={decreaseMonth} className="calendar__prevMonth"></button>
      <div className="calendar__month">
        {currentMonth.toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
        })}
      </div>
      <button onClick={increaseMonth} className="calendar__nextMonth"></button>
    </div>
  );
}
