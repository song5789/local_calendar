import styled from "styled-components";
import { useCalendarState } from "../Context/ScheduleContext";

const ListBackground = styled.div`
  width: 35%;
  height: 700px;
  position: absolute;
  top: 5%;
  right: 3%;
  border-radius: 15px;
  border: 1px solid black;
  padding: 1rem;
  box-sizing: border-box;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
    min-width: 460px;
    position: static;
  }
`;
const ListItmes = styled.div`
  width: 100%;
  border-left: 3px solid #10459c;
  padding: 1rem;
  box-sizing: border-box;
  & + & {
    margin-top: 1rem;
  }
`;

export default function ScheduleList() {
  const state = useCalendarState();

  return (
    <ListBackground className="schedule-list">
      <h2>전체 일정</h2>
      {state.map((list) => (
        <ListItmes key={list.id}>
          <h3>
            {new Date(list.date).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h3>
          <h4>{list.desc}</h4>
        </ListItmes>
      ))}
    </ListBackground>
  );
}
