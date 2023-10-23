import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a NavLink with 'Illustration and Design' text", () => {
      const expectedText = "Illustration and Design";

      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );

      const navigationLink = screen.getByRole("link", { name: expectedText });

      expect(navigationLink).toBeInTheDocument();
    });
  });
});
