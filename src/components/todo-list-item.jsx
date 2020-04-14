import React from "react";

const TodoItem = () => {
  return (
    <div className="item list-item" style={todoItemStyles}>
      <div className="content" style={{ flex: 2 }}>
        <div className="ui checked checkbox">
          <input id="checkbox" type="checkbox" />
          <label htmlFor="checkbox">Active</label>
        </div>
      </div>
      <div className="right floated content">
        <button className="ui button icon red">
          <i class="trash icon"></i>
        </button>
      </div>
    </div>
  );
};

const todoItemStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export default TodoItem;
