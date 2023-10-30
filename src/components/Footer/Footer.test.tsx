import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a footer with 'ABOUT' and 'SOCIAL MEDIA' headings", () => {
      const expectedTextOne = /about/i;
      const expectedTextTwo = /social media/i;

      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>,
      );

      const headingOne = screen.getByRole("heading", { name: expectedTextOne });
      const headingTwo = screen.getByRole("heading", { name: expectedTextTwo });

      expect(headingOne).toBeInTheDocument();
      expect(headingTwo).toBeInTheDocument();
    });
  });
});
