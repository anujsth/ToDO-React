import React, { useState } from "react";
import "./Input.css";

function Input(props) {
  const [enteredTask, setEnteredTask] = useState("");
  const submittedTask = (event) => {
    setEnteredTask(event.target.value);
  };

  const Submitted = (event) => {
    event.preventDefault();
    props.onInputSubmit(enteredTask);
  };

  return (
    <div>
      <h1>Task List</h1>
      <form className="new-task-form" onSubmit={Submitted}>
        <input
          type="text"
          name="new-task-input"
          className="new-task-input"
          placeholder="What do you have planned?"
          onChange={submittedTask}
        />
        <button type="submit" className="submitButton">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default Input;
