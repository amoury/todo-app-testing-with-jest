import React from "react";
import TodoItem from "./todo-list-item";

const TodoList = ({ todos }) => {
  return (
    <div className="ui middle aligned divided list todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
