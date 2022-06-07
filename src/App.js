import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";
import "./App.css";
import { InputField } from "./compoents/InputField";
import TodoList from "./compoents/TodoList";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className="App">
      <InputField text={text} setText={setText} handleSubmit={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
