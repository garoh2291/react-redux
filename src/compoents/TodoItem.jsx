import React from "react";
import { useDispatch } from "react-redux";
import { renoveTodo, toggelTodoComplete } from "../store/todoSlice";

function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch();
  const removeTodo = () => dispatch(renoveTodo({ id }));
  const toggleStatus = () => dispatch(toggelTodoComplete({ id }));
  return (
    <li key={id}>
      <input type="checkbox" checked={completed} onChange={toggleStatus} />
      <span>{text}</span>
      <span className="delete" onClick={removeTodo}>
        &times;
      </span>
    </li>
  );
}

export default TodoItem;
