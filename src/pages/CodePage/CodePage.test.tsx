import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CodePage from "./CodePage";

describe("Given a CodePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a headings with 'work' and '{<code />}' text", () => {
      const expectedHeadingOne = /work/i;
      const expectedHeadingTwo = /<code>/i;

      render(
        <BrowserRouter>
          <CodePage />
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
