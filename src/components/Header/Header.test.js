import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("getBy test cases: should render header component correctly", () => {
    it("getByText: should render same text passed into title prop", () => {
        render(<Header title="My Header" />);
        const headingElement = screen.getByText(/my header/i);
        expect(headingElement).toBeInTheDocument();
    });

    it("getByRole: should render same text passed into title prop", () => {
        render(<Header title="My Header" />);
        const headingElement = screen.getByRole("heading", {
            name: "My Header",
        });
        expect(headingElement).toBeInTheDocument();
    });

    it("getByTestId: should render same text passed into title prop", () => {
        render(<Header title="My Header" />);
        const headingElement = screen.getByTestId("header-1");
        expect(headingElement).toBeInTheDocument();
    });
});
