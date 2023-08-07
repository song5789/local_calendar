import { useState } from "react";
import CustomCalendar from "./components/CustomCalendar";
import styled from "styled-components";
import ScheduleContextProvider from "./Context/ScheduleContext";
import ScheduleList from "./components/ScheduleList";

const CalenderWrap = styled.div`
  width: 100%;
  padding: 48px 50% 48px 5%;
  box-sizing: border-box;
`;

function App() {
  return (
    <ScheduleContextProvider>
      <CalenderWrap>
        <CustomCalendar />
      </CalenderWrap>
      <ScheduleList />
    </ScheduleContextProvider>
  );
}

export default App;
