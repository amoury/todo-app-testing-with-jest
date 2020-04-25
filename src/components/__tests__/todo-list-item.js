import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoItem from "../todo-list-item";

const mockedTodo = {
  id: "1234",
  content: "grocery",
  completed: false,
};

const markCompleted = jest.fn();
const deleteTodo = jest.fn();

test('Todo list item not to be rendered when todo prop has value null', () => {
  const {queryByTestId} = render(<TodoItem todo={null} />);
  expect(queryByTestId('todo-list-item')).not.toBeInTheDocument();
});

describe('Todo List Item', () => {
  afterEach(() => {
    markCompleted.mockClear();
    deleteTodo.mockClear();
  });

  test("Todo is marked completed on checkbox click", () => {
    const { rerender, getByLabelText, getByTestId } = render(<TodoItem todo={mockedTodo} markCompleted={markCompleted} deleteTodo={deleteTodo} />)
    const checkbox = getByLabelText(mockedTodo.content);
    fireEvent.click(checkbox);
  
    expect(markCompleted).toHaveBeenCalledTimes(1);
    expect(markCompleted).toHaveBeenCalledWith(mockedTodo.id);

    rerender(<TodoItem todo={{...mockedTodo, completed: true}} markCompleted={markCompleted} deleteTodo={deleteTodo} />)
    expect(checkbox).toBeChecked();
    expect(getByTestId('todo-row')).toHaveClass('checked');
  });

  test("Todo item to be deleted on click of delete button", () => {
    render(<TodoItem todo={mockedTodo} markCompleted={markCompleted} deleteTodo={deleteTodo} />)
    const deleteBtn = screen.getByTestId("delete-btn");
    fireEvent.click(deleteBtn);
  
    expect(deleteTodo).toHaveBeenCalledTimes(1);
    expect(deleteTodo).toHaveBeenCalledWith("1234");
  });
})




