import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Input from "./component/Inputs/Input";
import Tasks from "./component/TaskList/Tasks";

// const Initial = ["read"];
function App() {
  const [task, setTask] = useState([]);
  const InputSubmitHandler = (arg) => {
    setTask((prevState) => {
      return [arg, ...prevState];
    });
  };

  const taskDeleteHandler = (id) => {
    setTask((prevState) => {
      return prevState.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Input onInputSubmit={InputSubmitHandler} />
      <Tasks passData={task} onDelete={taskDeleteHandler} />
    </div>
  );
}

export default App;
