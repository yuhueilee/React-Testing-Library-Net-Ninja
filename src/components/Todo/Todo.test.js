import { BrowserRouter } from "react-router-dom";
import Todo from "./Todo";
import { screen, render, fireEvent } from "@testing-library/react";

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    );
};

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    tasks.forEach((task) => {
        fireEvent.change(inputElement, {
            target: { value: task },
        });
        fireEvent.click(buttonElement);
    });
};

describe("should render todo correctly", () => {
    it("should display task", () => {
        render(<MockTodo />);
        addTask(["Go grocery shopping"]);
        const divElement = screen.getByText(/Go grocery shopping/i);
        expect(divElement).toBeInTheDocument();
    });

    it("should display multiple tasks", () => {
        render(<MockTodo />);
        addTask(["Go grocery shopping", "Pet my cat"]);
        const divElements = screen.getAllByTestId("task-container");
        expect(divElements.length).toBe(2);
    });

    it("should display task with incompleted style when initially render", () => {
        render(<MockTodo />);
        addTask(["Go grocery shopping", "Pet my cat"]);
        const divElement = screen.getByText(/Go grocery shopping/i);
        expect(divElement).not.toHaveClass("todo-item-active");
    });

    it("should display task with completed style when task is clicked", () => {
        render(<MockTodo />);
        addTask(["Go grocery shopping", "Pet my cat"]);
        const divElement = screen.getByText(/Go grocery shopping/i);
        fireEvent.click(divElement);
        expect(divElement).toHaveClass("todo-item-active");
    });
});
