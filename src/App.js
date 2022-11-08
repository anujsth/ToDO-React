import logo from "./logo.svg";
import "./App.css";
import Input from "./component/Inputs/Input";
import Tasks from "./component/TaskList/Tasks";

function App() {
  const InputSubmitHandler = (arg) => {
    const enteredTask = arg;
    console.log(enteredTask);
  };

  return (
    <div>
      <Input onInputSubmit={InputSubmitHandler} />
      <Tasks />
    </div>
  );
}

export default App;
