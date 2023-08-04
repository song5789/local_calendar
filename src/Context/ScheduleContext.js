import { createContext, useContext, useReducer } from "react";

const initialState = [];

/*
schedules 의 형태: 

id - 구분자 new Date().getTime()
desc - 일정 내용
date - 일정 등록한 날 (어쩌면 시간도)
*/

const reducer = (state, action) => {
  switch (action.type) {
    case "INSERT_SCHEDULES":
      return state.concat(action.schedule);
    case "DELETE_SCHEDULES":
      return state.filter((v) => v.id !== action.id);
    case "UPDATE_SCHEDULES":
      return state.map((v) => (v.id === action.id ? { ...v, ...action.update } : v));
    case "TOGGLE_SCHEDULES":
      return state.map((v) => (v.id === action.id ? { ...v, done: !v.done } : v));
    default:
      throw new Error(`Unhandled Action : ${action.type}`);
  }
};

const CalendarDataContext = createContext();
const CalendarDispatchContext = createContext();

export default function ScheduleContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CalendarDataContext.Provider value={state}>
      <CalendarDispatchContext.Provider value={dispatch}>{children}</CalendarDispatchContext.Provider>
    </CalendarDataContext.Provider>
  );
}

export function useCalendarState() {
  const context = useContext(CalendarDataContext);

  if (!context) {
    throw new Error("Cannot Find state context.");
  }
  return context;
}

export function useDispatch() {
  const context = useContext(CalendarDispatchContext);
  if (!context) {
    throw new Error("Cannot Find dispatch context.");
  }
  return context;
}
