import { useState } from "react";
import "./Task.css";
import App from "../../App";

function Tasks(props) {
  const [edit, setEdit] = useState(props.passData);

  return (
    <div class="task-list">
      <h2>Tasks</h2>
      <div className="task">
        {props.passData.map((arg, index) => (
          // <TaskLister task={arg} />
          <div className="task-lister">
            <input className="input-Task" value={arg} />
            <div>
              <button
                className="buttonDelete"
                onClick={() => {
                  props.onDelete(index);
                }}
              >
                Delete
              </button>
              <button
                className="buttonEdit"
                onClick={() => {
                  props.onEditHandler(index);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
