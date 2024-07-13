import React, { useState } from "react";
// I used/imported useState to keep track of whatever the user is typing in
export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState(""); // empty string initially
  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue(""); // set the input box to empty after clicking enter
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)} // e is for passing an event
      />
      <button type="submit" className="todo-btn">
        Add task
      </button>
    </form>
  );
};
// on line 6, we needed to add a function that captures the value of the state when the form is submitted
//Created another function to prevent the page from reloading each time a form is submitted, preventDefault
//
//
//
//
