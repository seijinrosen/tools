import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HelloWorld from ".";

describe("HelloWorld", () => {
  it("renders 'Hello World!'", () => {
    render(<HelloWorld />);

    const heading = screen.getByRole("heading");

    expect(heading).toHaveTextContent("Hello World!");
  });
});
