import React, { useState } from "react";
// I used/imported useState to keep track of whatever the user is typing in
export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue(""); // set the input box to empty after clicking enter
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)} // e is for passing an event
      />

      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
