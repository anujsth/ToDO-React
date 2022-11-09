import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Input from "./component/Inputs/Input";
import Tasks from "./component/TaskList/Tasks";

// const Initial = ["read"];
function App(props) {
  const [task, setTask] = useState([]);
  const InputSubmitHandler = (arg) => {
    setTask((prevState) => {
      return [arg, ...prevState];
    });
  };

  const TaskDelete = (arg) => {
    return setTask((task.arg = ""));
  };

  return (
    <div>
      <Input onInputSubmit={InputSubmitHandler} />
      <Tasks passData={task} onTaskDelete={TaskDelete} />
    </div>
  );
}

export default App;
