import React from "react";

function CalendarWeeks({ weeks }) {
  return (
    <div className="calendar__weeks">
      {weeks.map((week, index) => (
        <div key={index}>{week}</div>
      ))}
    </div>
  );
}

export default React.memo(CalendarWeeks);
