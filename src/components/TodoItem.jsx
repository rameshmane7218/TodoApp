import React from "react";
import style from "./todoItem.module.css";
const TodoItem = ({ todo, onDelete }) => {
  const [isCompleted, setIsCompleted] = React.useState(todo.isCompleted);
  return (
    <div className="todoDivContent" key={todo.id} style={{backgroundColor: isCompleted ? "rgba(0, 128, 0, 0.516)":""}}>
      <div>{todo.value}</div>
      <div className="checkboxDelete">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => {
            console.log(e.target.checked);
            setIsCompleted(e.target.checked);
          }}
        />
        <button
          onClick={() => {
            onDelete(todo.id);
          }}
          title="Delete"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
