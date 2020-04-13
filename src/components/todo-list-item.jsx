import React from "react";

const TodoItem = ({ todo, markCompleted, deleteTodo }) => {
  const handleComplete = (todoId) => {
    markCompleted(todoId);
  };
  if (!todo) return null;
  return (
    <div className="item list-item" style={todoItemStyles}>
      <div className="content" style={{ flex: 2 }}>
        <div className={`ui checkbox ${todo.completed && "checked"}`}>
          <input
            id={todo.id}
            type="checkbox"
            defaultChecked={todo.completed}
            onChange={() => handleComplete(todo.id)}
          />
          <label data-testid="todo-label" htmlFor={todo.id}>
            {todo.content}
          </label>
        </div>
      </div>
      <div className="right floated content">
        <button
          data-testid="delete-btn"
          className="ui button icon red"
          onClick={() => deleteTodo(todo.id)}
        >
          <i className="trash icon"></i>
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
