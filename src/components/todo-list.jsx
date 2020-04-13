import React from "react";
import TodoItem from "./todo-list-item";

const TodoList = ({ todos, markCompleted }) => {
  return (
    <div className="ui middle aligned divided list todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markCompleted={markCompleted} />
      ))}
    </div>
  );
};

export default TodoList;
