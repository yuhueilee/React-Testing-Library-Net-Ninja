import AddInput from "./AddInput";
import { screen, render } from "@testing-library/react";

const MockSetTodos = jest.fn(); // mock function that does nothing

describe("should render add input correctly", () => {
    it("should render input element", () => {
        render(<AddInput setTodos={MockSetTodos} todos={[]} />);
        const inputElement = screen.getByPlaceholderText(
            /Add a new task here.../i
        );
        expect(inputElement).toBeInTheDocument();
    });
});
