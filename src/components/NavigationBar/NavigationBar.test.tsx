import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./NavigationBar";

describe("Given a NavigationBar component", () => {
  describe("When is rendered", () => {
    test("Then it should have a link with a text 'Illustration and Design'", () => {
      const expectedText = "Illustration and Design";

      render(
        <BrowserRouter>
          <NavigationBar />
        </BrowserRouter>,
      );

      const navigationLink = screen.getByRole("link", { name: expectedText });

      expect(navigationLink).toBeInTheDocument();
    });
  });
});
