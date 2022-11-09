import { useState } from "react";
import "./TaskLister.css";

function TaskLister(props) {
  //   const [taskPrint, setTaskPrint] = useState(props.task);
  const taskDelete = () => {
    props.task = "";
  };
  return (
    <div className="task-lister">
      <h1>{props.task}</h1>
      <div>
        <button className="buttonDelete" onClick={taskDelete}>
          Delete
        </button>
        <button className="buttonEdit">Edit</button>
      </div>
    </div>
  );
}

export default TaskLister;
