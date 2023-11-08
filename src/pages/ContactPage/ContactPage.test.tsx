import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";

describe("Given a ContactPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a headings with 'CONTACT' and 'Get in touch!' text", () => {
      const expectedHeadingOne = "CONTACT";
      const expectedHeadingTwo = "Get in touch!";

      render(
        <BrowserRouter>
          <ContactPage />
        </BrowserRouter>,
      );

      const headingOne = screen.getByRole("heading", {
        name: expectedHeadingOne,
      });
      const headingTwo = screen.getByRole("heading", {
        name: expectedHeadingTwo,
      });

      expect(headingOne).toBeInTheDocument();
      expect(headingTwo).toBeInTheDocument();
    });
  });
});
