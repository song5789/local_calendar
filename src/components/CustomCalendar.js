import { useEffect, useState } from "react";
import { getCurrentMonthObject, getPrevMonthObject, getNextMonthObject, drawMonthWithDateObj } from "../lib/calcMonth";
import styled from "styled-components";
import CalendarHead from "./CalendarHead";
import CalendarWeeks from "./CalendarWeeks";
import CalendarBody from "./CalendarBody";
import { useCalendarState } from "../Context/ScheduleContext";
import { MdSave, MdDelete } from "react-icons/md";

const StyledCalendar = styled.div`
  width: 100%;
  min-width: 460px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .calendar__weeks {
    width: 100%;
    display: flex;
    flex-direciton: row;
  }
  .calendar__weeks > div {
    width: calc(100% / 7);
    text-align: center;
    font-size: 1.2rem;
    padding: 0.3rem;
    box-sizing: border-box;
  }
  .calendar__head {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    box-sizing: border-box;
  }
  .calendar__month {
    font-size: 2rem;
    font-weight: 700;
  }
  .calendar__prevMonth,
  .calendar__nextMonth {
    width: 25px;
    height: 25px;
    background: transparent;
    border-left: none;
    border-bottom: none;
    border-top: 5px solid #000;
    border-right: 5px solid #000;
  }
  .calendar__prevMonth {
    transform: rotate(-135deg);
  }
  .calendar__nextMonth {
    transform: rotate(45deg);
  }
  .calendar__prevMonth:hover,
  .calendar__nextMonth:hover {
    opacity: 0.8;
    border-top: 5px solid #3270e3;
    border-right: 5px solid #3270e3;
  }
  .calendar__button__disable {
    color: gray;
    opacity: 0.6;
  }
  button {
    cursor: pointer;
  }
  .calendar__button {
    width: calc(100% / 7);
    padding: 2rem;
    box-sizing: border-box;
    background: transparent;
    border: none;
    border-radius: 8px;
    font-size: 100%;
  }
  .calendar__button:hover {
    background: #b9babd;
  }
  .calendar__button:focus {
    background: #3866f2;
    color: #fff;
  }
  .calendar__button:active {
    background: #597ef0;
    color: #fff;
  }
  .calendar__button_today {
    background: #1795eb !important;
    color: #fff;
  }
  .calendar__button_today:hover {
    opacity: 0.8;
  }
  .calendar__button_today:active {
    opacity: 1;
  }

  .save-btn {
    background: black;
    color: #fff;
  }

  .delete-btn {
    color: #ff6b6b;
  }
`;

const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  top: ${(props) => props.topheight || "100%"};
  right: 2%;
  border: none;

  & + & {
    margin-top: 1.5rem;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 12px #000;
  }
`;

export default function Calendar() {
  const [monthState, setmonthState] = useState([]);
  const [weeks, setWeek] = useState([]);
  const state = useCalendarState();
  const [monthHandler, setMonthHandler] = useState(new Date().getMonth());
  const increaseMonth = () => setMonthHandler((state) => state + 1);
  const decreaseMonth = () => setMonthHandler((state) => state - 1);

  const saveOnLocal = () => {
    localStorage.setItem("schedules", JSON.stringify(state, null, 2));
  };
  const deleteAllSchedules = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  const today = new Date();
  const currentMonthObj = getCurrentMonthObject(today, monthHandler);
  const prevMonthObj = getPrevMonthObject(currentMonthObj.currentMonthFirstDate);
  const nextMonthObj = getNextMonthObject(currentMonthObj.currentMonthFirstDate);

  useEffect(() => {
    setmonthState(drawMonthWithDateObj(currentMonthObj, prevMonthObj, nextMonthObj));
    setWeek(["일", "월", "화", "수", "목", "금", "토"]);
  }, [monthHandler]);

  if (!monthState) return <div>null</div>;
  return (
    <StyledCalendar>
      <CalendarHead currentMonth={currentMonthObj.currentMonthFirstDate} increaseMonth={increaseMonth} decreaseMonth={decreaseMonth} />
      <CalendarWeeks weeks={weeks} />
      {monthState.map((v, index) => (
        <CalendarBody v={v} key={index} />
      ))}
      <Button topheight="80%" className="save-btn" onClick={saveOnLocal}>
        <abbr title="Local 저장">
          <MdSave />
        </abbr>
      </Button>
      <Button topheight="85%" className="delete-btn" onClick={deleteAllSchedules}>
        <abbr title="Local 에 저장된 값 전체삭제">
          <MdDelete />
        </abbr>
      </Button>
    </StyledCalendar>
  );
}
