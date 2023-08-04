import styled from "styled-components";
import timeCompare from "../lib/timeCompare";
import { useState } from "react";
import ScheduleForm from "./ScheduleForm";
import { useCalendarState } from "../Context/ScheduleContext";
import { useEffect } from "react";

const MonthButton = styled.button`
  color: ${(props) => (props.holiday === 0 ? "#ed0909" : props.holiday === 6 ? "#135ef2" : "inherit")};
  position: relative;
`;

const ScheduleCircle = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  font-size: 0.5rem;
  font-weight: 700;
  background: tomato;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 15%;
  right: 10%;
`;

export default function CalendarBody({ v }) {
  const [lists, setLists] = useState([]);
  const [hasSche, setHasSche] = useState(false);
  const [btnToggle, setBtnToggle] = useState(false);

  const state = useCalendarState();
  const today = new Date();
  const isToday = timeCompare(today, v.date);

  const isIncludes = (lists, date) => {
    for (let item in lists) {
      console.log(item.date);
      if (item.date === date) return true;
      return false;
    }
  };

  useEffect(() => {
    setLists(state.filter((s) => s.date === v.date));
  }, [state, lists.length]);

  const toggleForm = () => {
    setBtnToggle(!btnToggle);
  };

  return (
    <>
      <MonthButton className={`calendar__button ${v.class} ${isToday && "calendar__button_today"}`} onClick={toggleForm} holiday={v.date.getDay()}>
        {v.date.getDate()}
        {lists.length !== 0 ? <ScheduleCircle>{lists.length}</ScheduleCircle> : ""}
      </MonthButton>
      {btnToggle && <ScheduleForm showForm={toggleForm} v={v} />}
    </>
  );
}
