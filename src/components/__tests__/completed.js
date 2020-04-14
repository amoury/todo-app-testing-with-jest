import React from "react";
import { render, getAllByText, getByTestId } from "@testing-library/react";
import Completed from "../completed";

const mockTodosWithSomeCompleted = [
  { completed: true },
  { completed: true },
  { completed: false },
];

const mockTodosWithAllCompleted = [{ completed: true }, { completed: true }];

test("correct message is displayed based on the completed tasks", () => {
  const { getByText, rerender } = render(
    <Completed todos={[{ id: "1234", content: "hello", completed: false }]} />
  );

  getByText(/Come on you /i);

  rerender(<Completed todos={mockTodosWithSomeCompleted} />);
  getByText(/completed 2 tasks/i);

  rerender(<Completed todos={mockTodosWithAllCompleted} />);
  getByText(/excellent/i);
});
