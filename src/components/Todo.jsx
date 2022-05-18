import React from "react";
import TodoItem from "./TodoItem";

export const Todo = () => {
  let [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const onDelete = (id) => {
    let newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };
  return (
    <div>
      <h1 style={{fontSize:"28px"}}>Todo App</h1>
      <div className="todoDiv">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </div>
      <div className="inputDiv">
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          placeholder="Write Something"
        />
        <button
          disabled={!value}
          onClick={() => {
            setTodos([
              ...todos,
              { id: Date.now(), value: value, isCompleted: false },
            ]);
            setValue("");
          }}
          title="Add"
          className="addBtn"
        >
          +
        </button>
      </div>
    </div>
  );
};
