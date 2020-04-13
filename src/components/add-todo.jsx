import React, { useRef, useEffect } from "react";
import { uuid } from "uuidv4";

const AddTodo = ({ add }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputRef.current.value) return;
    add({ id: uuid(), content: inputRef.current.value, completed: false });
    inputRef.current.value = "";
  };

  return (
    <form
      className="ui form"
      data-testid="new-todo-form"
      onSubmit={handleSubmit}
    >
      <div className="ui fluid action input">
        <input
          data-testid="new-item"
          type="text"
          name="new-item"
          id="new-item"
          placeholder="Add a new todo"
          ref={inputRef}
        />
        <button
          type="submit"
          data-testid="submit-btn"
          className="ui button teal"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
