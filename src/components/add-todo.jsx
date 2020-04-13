import React, { useRef, useEffect } from "react";

const AddTodo = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className="ui form">
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
