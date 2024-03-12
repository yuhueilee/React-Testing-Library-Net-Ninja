import { BrowserRouter } from "react-router-dom";
import TodoFooter from "./TodoFooter";
import { screen, render } from "@testing-library/react";

describe("should render todo footer correctly", () => {
    const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
        return (
            <BrowserRouter>
                <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
            </BrowserRouter>
        );
    };

    it("should render the correct amount of incomplete tasks", () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5} />);
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument();
        expect(paragraphElement).toContainHTML("p");
    });

    it('should render "task" when the number of incomplete tasks is one', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeInTheDocument();
    });
});
