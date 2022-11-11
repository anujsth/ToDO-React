import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Input from "./component/Inputs/Input";
import Tasks from "./component/TaskList/Tasks";

// const Initial = ["read"];
function App() {
  const [task, setTask] = useState([]);
  const [editedInput, setEditedInput] = useState("");
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

  const editHandler = (id, edited) => {
    task[id] = edited;
    return setTask([...task]);
  };

  const editedInputHandler = (arg) => {
    setEditedInput(arg);
  };

  return (
    <div className="app-style">
      <Input onInputSubmit={InputSubmitHandler} />
      <Tasks
        passData={task}
        onDelete={taskDeleteHandler}
        onEditHandler={editHandler}
        onEditedInput={editedInputHandler}
      />
    </div>
  );
}

export default App;
