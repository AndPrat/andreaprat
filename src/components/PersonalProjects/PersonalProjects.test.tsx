import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PersonalProjects from "./PersonalProjects";

describe("Given a CodePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with 'Personal projects' text", () => {
      const expectedHeading = /Personal projects/i;

      render(
        <BrowserRouter>
          <PersonalProjects />
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a image with an alt 'Escapadesenparella logo'", () => {
      const expectedAltText = /Escapadesenparella logo/i;

      render(
        <BrowserRouter>
          <PersonalProjects />
        </BrowserRouter>,
      );

      const altImage = screen.getByAltText(expectedAltText);

      expect(altImage).toBeInTheDocument();
    });
  });
});
