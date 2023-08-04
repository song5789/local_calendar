import styled, { css, keyframes } from "styled-components";
import { MdClose, MdAdd } from "react-icons/md";
import { useEffect, useState } from "react";
import ScheduleCreate from "./ScheduleCreate";
import { useCalendarState } from "../Context/ScheduleContext";
import ScheduleItem from "./ScheduleItem";

const FadeIn = keyframes`
0%{
    opacity: 0;
}
100%{
    opacity: 1;
}
`;

const SlideDown = keyframes`
 0%{
    opacity: 0;
    transform: translateY(-40%);
}
100%{
    opacity: 1;
    transform: translateY(0%);
}
`;

const FormPositioner = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${FadeIn} 0.5s ease-in-out;
`;

const ScheduleForm = styled.div`
  width: 45%;
  background: #fff;
  border-radius: 15px;
  position: relative;

  animation: ${SlideDown} 1s ease-in-out both;
`;
const FormHead = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  margin-bottom: 0.5rem;
  padding: 1.2rem;
  box-sizing: border-box;
`;
const FormBody = styled.div`
  width: 100%;
  height: 320px;
  overflow-y: scroll;
  padding: 1.2rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
`;

const Close = styled.div`
  position: absolute;
  font-size: 2.5rem;
  top: 4%;
  right: 1.2%;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`;

export default function SheduleForm({ showForm, v }) {
  const state = useCalendarState();
  const dateString = v.date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = v.date.toLocaleDateString("ko-KR", { weekday: "long" });
  return (
    <FormPositioner>
      <ScheduleForm>
        <Close onClick={showForm}>
          <MdClose />
        </Close>
        <FormHead>
          <h1>{dateString}</h1>
          <h2>{dayName}</h2>
        </FormHead>
        <FormBody>
          {state
            .filter((s) => s.date === v.date)
            .map((list) => (
              <ScheduleItem list={list} key={list.id} />
            ))}
        </FormBody>
        <ScheduleCreate v={v} />
      </ScheduleForm>
    </FormPositioner>
  );
}
