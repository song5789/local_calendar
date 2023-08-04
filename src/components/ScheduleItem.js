import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useDispatch } from "../Context/ScheduleContext";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;
const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 0 0.8rem 0;

  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 1px solid #ced4da;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.8rem;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

export default function ScheduleItem({ list }) {
  const dispatch = useDispatch();

  const toggleDone = () => {
    dispatch({ type: "TOGGLE_SCHEDULES", id: list.id });
  };

  const deleteItem = () => {
    dispatch({ type: "DELETE_SCHEDULES", id: list.id });
  };

  return (
    <ItemBlock>
      <CheckCircle onClick={toggleDone} done={list.done}>
        {list.done && <MdDone />}
      </CheckCircle>
      <Text done={list.done}>{list.desc}</Text>
      <Remove onClick={deleteItem}>
        <MdDelete />
      </Remove>
    </ItemBlock>
  );
}
