import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleStatus } from "../store/todoSlice";

function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch();
  const removeTodo = () => dispatch(deleteTodo(id));
  const toggleTaskStatus = () => dispatch(toggleStatus(id));
  return (
    <li key={id}>
      <input type="checkbox" checked={completed} onChange={toggleTaskStatus} />
      <span>{title}</span>
      <span className="delete" onClick={removeTodo}>
        &times;
      </span>
    </li>
  );
}

export default TodoItem;
