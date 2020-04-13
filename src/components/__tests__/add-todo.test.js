import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddTodo from "../add-todo";

jest.mock("uuidv4", () => ({
  uuid: () => "1234",
}));

test("AddTodo renders without crashing", () => {
  render(<AddTodo />);
});

test("AddTodo contains input field and is focused on load", () => {
  const { getByTestId } = render(<AddTodo />);
  const inputField = getByTestId("new-item");

  expect(inputField).toHaveFocus();
});

test("Form submission should not call add method if input field is empty", () => {
  const add = jest.fn();
  const { getByTestId } = render(<AddTodo add={add} />);
  const btn = getByTestId("submit-btn");
  fireEvent.click(btn);

  expect(add).not.toHaveBeenCalledTimes(1);
});

test("Form submission should go through successfully", () => {
  const add = jest.fn();
  const { getByTestId } = render(<AddTodo add={add} />);
  const input = getByTestId("new-item");
  const btn = getByTestId("submit-btn");

  fireEvent.change(input, { target: { value: "grocery" } });
  fireEvent.click(btn);

  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith({
    id: "1234",
    content: "grocery",
    completed: false,
  });

  expect(input).toHaveValue("");
});
