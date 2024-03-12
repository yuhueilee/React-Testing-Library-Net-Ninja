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

describe("findBy test cases: should render header component correctly", () => {
    it("findByText: should render same text passed into title prop", async () => {
        render(<Header title="My Header" />);
        const headingElement = await screen.findByText(/my header/i);
        expect(headingElement).toBeInTheDocument();
    });
});

describe("queryBy test cases: should render header component correctly", () => {
    it("queryByText: should not render other text except the one passed into title prop", () => {
        render(<Header title="My Header" />);
        const headingElement = screen.queryByText(/dogs/i);
        expect(headingElement).not.toBeInTheDocument();
    });
});

describe("getAllBy test cases: should render header component correctly", () => {
    it("getAllByRole: should render only one heading element", () => {
        render(<Header title="My Header" />);
        const headingElements = screen.getAllByRole("heading");
        expect(headingElements.length).toBe(1);
    });
});
