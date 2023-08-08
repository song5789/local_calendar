import styled, { css } from "styled-components";
import { useCalendarState } from "../Context/ScheduleContext";
import { MdClose, MdSave, MdDelete } from "react-icons/md";

const ListBackground = styled.div`
  width: 40%;
  height: 100vh;
  position: absolute;
  top: 0%;
  right: -50%;
  background: #fff;

  padding: 1rem;
  box-sizing: border-box;
  overflow-y: scroll;
  z-index: 5;
  transition: 1s;

  &::-webkit-scrollbar {
    display: none;
  }

  ${(props) =>
    props.toggle &&
    css`
      right: 0%;
      background: #fff;
      box-shadow: -9px 0 8px rgba(0, 0, 0, 0.8);
    `}
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
const ListHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h2 {
    display: inline-block;
    margin: 0;
    margin-left: 3rem;
  }
`;
const Hamberg = styled.div`
  font-size: 2.5rem;
  cursor: pointer;
  transition: 0.25s;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  box-sizing: border-box;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
  }
`;

export default function ScheduleList({ toggle, onToggle }) {
  const state = useCalendarState();

  return (
    <ListBackground className="schedule-list" toggle={toggle}>
      <ListHeader>
        <Hamberg onClick={onToggle}>
          <MdClose />
        </Hamberg>
        <h2>전체 일정</h2>
      </ListHeader>
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
