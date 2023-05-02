import React, { useState, useEffect } from "react";
import AddTimer from "./AddTimer";
import TimerList from "./TimerList";

const Timer = () => {
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimers((prevTimers) => {
        return prevTimers
          .map((timer) => {
            const remainingTime = timer.remainingTime - 0.01;
            if (remainingTime <= 0) {
              clearInterval(timer.intervalId);
              return null;
            } else {
              return { ...timer, remainingTime };
            }
          })
          .filter(Boolean);
      });
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function createTimer(seconds) {
    const createdAt = new Date();
    const remainingTime = +seconds;
    let intervalId = setInterval(() => {}, 10);
    const timer = { createdAt, remainingTime, intervalId };
    setTimers((prevTimers) => [...prevTimers, timer]);

    intervalId = setInterval(() => {
      setTimers((prevTimers) => {
        return prevTimers
          .map((prevTimer) => {
            if (prevTimer === timer) {
              const remainingTime = prevTimer.remainingTime - 0.01;
              if (remainingTime <= 0) {
                clearInterval(intervalId);
                return null;
              } else {
                return { ...prevTimer, remainingTime };
              }
            } else {
              return prevTimer;
            }
          })
          .filter(Boolean);
      });
    }, 10);
  }

  function deleteTimer(timerToDelete) {
    clearInterval(timerToDelete.intervalId);
    setTimers((prevTimers) => {
      return prevTimers.filter((prevTimer) => prevTimer !== timerToDelete);
    });
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%", textAlign: "right" }}>
          <TimerList
            timers={timers || []}
            deleteTimer={deleteTimer}
            createTimer={createTimer}
          />
        </div>
        <div style={{ width: "50%" }}>
          <AddTimer createTimer={createTimer} />
        </div>
      </div>
    </>
  );
};

export default Timer;
