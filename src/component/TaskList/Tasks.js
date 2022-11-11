import { useState } from "react";
import "./Task.css";
import App from "../../App";

function Tasks(props) {
  const [val, setVal] = useState("");
  const [editing, setEditing] = useState(false);
  // const editHandler = (event) => {
  //   setEdit(event.target.value);
  //   console.log(edit);
  // };

  const handleEditing = (event) => {
    console.log("editing..");
    setEditing(true);
  };

  // const enteredInput = () => {
  //   props.onEditedInput(val);
  //   setEditing(false);
  // };

  const submitInput = (event) => {
    setVal(event.target.value);
  };

  return (
    <div class="task-list">
      <h2>Tasks</h2>
      <div className="task">
        {props.passData.map((arg, index) => (
          // <TaskLister task={arg} />
          <div className="task-lister">
            {editing ? (
              <input
                placeholder={arg}
                type="text"
                className="input-style"
                onBlur={() => {
                  props.onEditHandler(index, val);
                  setEditing(false);
                }}
                onChange={submitInput}
              />
            ) : (
              <h1>{arg}</h1>
            )}

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
                onClick={handleEditing}
                // onClick={() => {
                //   props.onEditHandler(index, edit);
                // }}
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
