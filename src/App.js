import { useState } from "react";
import CustomCalendar from "./components/CustomCalendar";
import styled, { createGlobalStyle } from "styled-components";
import ScheduleContextProvider from "./Context/ScheduleContext";
import ScheduleList from "./components/ScheduleList";
import { MdMenu } from "react-icons/md";

const CalenderWrap = styled.div`
  width: 100%;
  padding: 48px 10% 48px 10%;
  box-sizing: border-box;
`;

const MenuButton = styled.div`
  font-size: 2.5rem;
  cursor: pointer;
  position: fixed;
  top: 2%;
  right: 1%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-itmes: center;
  padding: 0.5rem;
  box-sizing: border-box;
  transition: 0.25s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
  }
`;

const GlobalStyles = createGlobalStyle`
body{
  margin: 0;
  overflow: hidden;
}
`;

function App() {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <ScheduleContextProvider>
      <GlobalStyles />
      <MenuButton onClick={onToggle}>
        <MdMenu />
      </MenuButton>
      <CalenderWrap>
        <CustomCalendar />
      </CalenderWrap>
      <ScheduleList toggle={toggle} onToggle={onToggle} />
    </ScheduleContextProvider>
  );
}

export default App;
