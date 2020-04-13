import React from "react";

const AddTodo = () => {
  return (
    <form className="ui form">
      <div className="ui fluid action input">
        <input type="text" id="new-item" />
        <button type="submit" className="ui button">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
