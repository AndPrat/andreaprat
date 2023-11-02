import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Given a Header component", () => {
  describe("When is rendered", () => {
    test("Then it should show a 'Andrea Prat' text in a heading", () => {
      const expectedText = /andrea prat/i;

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const headerText = screen.getByRole("heading", { name: expectedText });

      expect(headerText).toBeInTheDocument();
    });
  });
});
