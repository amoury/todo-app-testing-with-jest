
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AddTodo from "../add-todo";

const mockedAdd = jest.fn();

jest.mock("uuidv4", () => ({
  uuid: () => "1234",
}));

describe('AddTodo', () => {
  beforeEach(() => {
    render(<AddTodo add={mockedAdd} />)
  })

  afterEach(() => {
    mockedAdd.mockClear();
  })

  test("It contains input field and it has focus on mount", () => {
    const inputField = screen.getByPlaceholderText("Add a new todo");
    expect(inputField).toHaveFocus();
  });

  test("Form submission should go through successfully", () => {
    const input = screen.getByPlaceholderText("Add a new todo");
    const btn = screen.getByText(/add/i);
  
    fireEvent.change(input, { target: { value: "grocery" } });
    fireEvent.click(btn);
  
    expect(mockedAdd).toHaveBeenCalledTimes(1);
    expect(mockedAdd).toHaveBeenCalledWith({
      id: "1234",
      content: "grocery",
      completed: false,
    });
  
    expect(input).toHaveValue("");
});

  test("Form submission should not call `add` method if input field is empty", () => {
    const btn = screen.getByText(/add/i);
    fireEvent.click(btn);
    expect(mockedAdd).not.toHaveBeenCalled();
  });
});