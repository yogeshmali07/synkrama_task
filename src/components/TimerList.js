import React from "react";
import moment from "moment";
import "./css/TimerList.css";

function TimerList({ timers, deleteTimer, createTimer }) {
  return (
    <div className="TimerList">
      <ul>
        {timers.map((timer) => (
          <li key={timer.createdAt}>
            <span className="remainingTime">
              {timer.remainingTime.toFixed(2).toString().replace(".", ",")}
            </span>
            <span className="startTime">
              {moment(timer.createdAt).format("DD/MM/YYYY HH:mm:ss")}
            </span>

            <button className="deleteTimer" onClick={() => deleteTimer(timer)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimerList;
