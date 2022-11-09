import { useState } from "react";
import "./Task.css";
import App from "../../App";
import TaskLister from "./TaskLister";

function Tasks(props) {
  return (
    <div class="task-list">
      <h2>Tasks</h2>
      <div className="task">
        {props.passData.map((arg) => (
          // <TaskLister task={arg} />
          <div className="task-lister">
            <h1>{arg}</h1>
            <div>
              <button
                className="buttonDelete"
                onClick={() => {
                  props.onTaskDelete(arg);
                }}
              >
                Delete
              </button>
              <button className="buttonEdit">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
