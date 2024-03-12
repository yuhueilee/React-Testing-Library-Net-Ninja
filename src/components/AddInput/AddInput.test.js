import AddInput from "./AddInput";
import { screen, render, fireEvent } from "@testing-library/react";

const MockSetTodos = jest.fn(); // mock function that does nothing

describe("should render add input correctly", () => {
    it("should render input element", () => {
        render(<AddInput setTodos={MockSetTodos} todos={[]} />);
        const inputElement = screen.getByPlaceholderText(
            /Add a new task here.../i
        );
        expect(inputElement).toBeInTheDocument();
    });

    it("should be able to type in input", () => {
        render(<AddInput setTodos={MockSetTodos} todos={[]} />);
        const inputElement = screen.getByPlaceholderText(
            /Add a new task here.../i
        );
        fireEvent.change(inputElement, {
            target: { value: "Go Grocery Shopping" },
        });
        expect(inputElement.value).toBe("Go Grocery Shopping");
    });
});
