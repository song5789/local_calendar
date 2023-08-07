import styled from "styled-components";
import timeCompare from "../lib/timeCompare";
import { useState } from "react";
import ScheduleForm from "./ScheduleForm";
import { useCalendarState } from "../Context/ScheduleContext";
import { useEffect } from "react";
import isHoliday from "../lib/isHoliday";

const MonthButton = styled.button`
  color: ${(props) => (props.holiday ? "#ed0909" : props.weekend === 6 ? "#135ef2" : props.weekend === 0 ? "#ed0909" : "inherit")};
  position: relative;
`;

const ScheduleCircle = styled.div`
  width: 0.001rem;
  height: 0.001rem;
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

const HolidayBlock = styled.div`
  width: 100%;
  color: ${(props) => (props.holiday ? "#ed0909" : "inherit")};
  font-size: 0.7rem;
  margin-top: 0.75rem;

  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  abbr {
    text-decoration: none;
  }
`;

export default function CalendarBody({ v }) {
  const [btnToggle, setBtnToggle] = useState(false);
  const [holiday, setHoliday] = useState([]);

  const today = new Date();
  const isToday = timeCompare(today, v.date);

  const toggleForm = () => {
    setBtnToggle(!btnToggle);
  };

  useEffect(() => {
    setHoliday(isHoliday(v.date));
  }, [v.date]);

  return (
    <>
      <MonthButton
        className={`calendar__button ${v.class} ${isToday && "calendar__button_today"}`}
        onClick={toggleForm}
        weekend={v.date.getDay()}
        holiday={holiday[0] ? holiday[0].isHoliday : null}
      >
        {v.date.getDate()}
        {holiday.map((h) => (
          <HolidayBlock holiday={h.isHoliday} key={h.name}>
            <abbr title={h.name}>{h.name}</abbr>
          </HolidayBlock>
        ))}
      </MonthButton>
      {btnToggle && <ScheduleForm showForm={toggleForm} v={v} />}
    </>
  );
}
