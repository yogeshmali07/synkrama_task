import React, { useState } from "react";
import "./css/AddTimer.css";

const AddTimer = ({ createTimer }) => {
  const [seconds, setSeconds] = useState("");

  function handleSecondsChange(event) {
    setSeconds(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // onSubmit(parseFloat(seconds));
    createTimer(seconds);
    setSeconds("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label className="newTimerLabel">New timer:</label> <br />
        <input
          type="number"
          step="0.01"
          value={seconds}
          onChange={handleSecondsChange}
        />
        <br />
        <button type="submit" className="createTimerButton">
          Add
        </button>
      </form>
    </>
  );
};

export default AddTimer;
