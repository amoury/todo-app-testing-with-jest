import React from "react";

const AddTodo = () => {
  return (
    <form className="ui form">
      <div className="ui fluid action input">
        <input type="text" id="new-item" placeholder="Add a new todo" />
        <button type="submit" className="ui button teal">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
