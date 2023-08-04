import styled, { css } from "styled-components";
import { MdClose, MdAdd } from "react-icons/md";
import { useState } from "react";
import { useCalendarState, useDispatch } from "../Context/ScheduleContext";

const CreateArea = styled.div`
  width: 100%;
  height: 150px;
  padding: 1.2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #bfbdbd;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const AddButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  font-size: 2.5rem;
  border: none;
  color: #fff;
  background: #5bc94d;
  transition: 0.25s;
  position: absolute;
  top: -25%;

  &:hover {
    background: #6abf60;
  }
  &:active {
    background: #3cbd2d;
  }

  ${(props) =>
    props.open &&
    css`
      background: #b8232a;

      &:hover {
        background: #b52f35;
      }
      &:active {
        background: #b31017;
      }
      transform: rotate(45deg);
    `}
`;

const InsertForm = styled.form`
  width: 100%;
  padding: 1.2rem;
  box-sizing: border-box;
  margin-top: 1rem;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 1rem;
  font-size: 1rem;
  outline: none;
`;

export default function ScheduleCreate({ v }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const toggle = () => {
    setOpen(!open);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "INSERT_SCHEDULES",
      schedule: {
        id: new Date().getTime(),
        desc: value,
        date: v.date,
        done: false,
      },
    });
    setValue("");
    toggle();
  };

  return (
    <CreateArea>
      <AddButton open={open} onClick={toggle}>
        <MdAdd />
      </AddButton>
      {open && (
        <InsertForm onSubmit={onSubmit}>
          <Input value={value} onChange={onChange} placeholder="일정을 입력후 Enter 를 눌러 추가하세요" autoFocus />
        </InsertForm>
      )}
    </CreateArea>
  );
}
