import { useState } from "react";
import CustomCalendar from "./components/CustomCalendar";
import styled from "styled-components";
import ScheduleContextProvider from "./Context/ScheduleContext";

const CalenderWrap = styled.div`
  width: 100%;
  padding: 48px 25%;
  box-sizing: border-box;
`;

function App() {
  return (
    <ScheduleContextProvider>
      <CalenderWrap>
        <CustomCalendar />
      </CalenderWrap>
    </ScheduleContextProvider>
  );
}

export default App;
