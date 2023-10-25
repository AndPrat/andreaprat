import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When is rendered", () => {
    test("Then it should show a 'Andrea Prat' text in a heading", () => {
      const expectedText = /andrea prat/i;

      render(<Header />);

      const headerText = screen.getByRole("heading", { name: expectedText });

      expect(headerText).toBeInTheDocument();
    });
  });
});
