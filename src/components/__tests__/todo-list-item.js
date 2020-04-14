import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import TodoItem from "../todo-list-item";

const mockedTodo = {
  id: "1234",
  content: "grocery",
  completed: false,
};

const markCompleted = jest.fn();
const deleteTodo = jest.fn();

afterEach(() => {
  cleanup();
});

test("Todo is marked completed on checkbox click", () => {
  const { getByLabelText } = render(
    <TodoItem todo={mockedTodo} markCompleted={markCompleted} />
  );
  const checkbox = getByLabelText(mockedTodo.content);
  fireEvent.click(checkbox);

  expect(markCompleted).toHaveBeenCalledTimes(1);
  expect(markCompleted).toHaveBeenCalledWith(mockedTodo.id);
});
test("Todo item to be deleted on click of delete button", () => {
  const { getByTestId } = render(
    <TodoItem todo={mockedTodo} deleteTodo={deleteTodo} />
  );
  const deleteBtn = getByTestId("delete-btn");
  fireEvent.click(deleteBtn);

  expect(deleteTodo).toHaveBeenCalledTimes(1);
  expect(deleteTodo).toHaveBeenCalledWith("1234");
});
