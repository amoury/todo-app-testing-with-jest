import React, { useRef, useEffect } from "react";

const AddTodo = ({ add }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    add({ id: 1, content: inputRef.current.value });
    console.log({ inputRef: inputRef.current.value });
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="ui fluid action input">
        <input
          type="text"
          name="new-item"
          id="new-item"
          placeholder="Add a new todo"
          ref={inputRef}
        />
        <button type="submit" className="ui button teal">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
