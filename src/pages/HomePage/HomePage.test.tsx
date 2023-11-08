import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import { beforeAll } from "vitest";

beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe("Given the HomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it show should a headings with the texts 'G'day! I'm Andrea', 'Some of my latest work' and 'Personal projects'", () => {
      const expectedHeadingOne = "G'day! I'm Andrea";
      const expectedHeadingTwo = "Some of my latest work";
      const expectedHeadingThree = "Personal projects";

      render(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>,
      );

      const headingOne = screen.getByRole("heading", {
        name: expectedHeadingOne,
      });
      const headingTwo = screen.getByRole("heading", {
        name: expectedHeadingTwo,
      });
      const headingThree = screen.getByRole("heading", {
        name: expectedHeadingThree,
      });

      expect(headingOne).toBeInTheDocument();
      expect(headingTwo).toBeInTheDocument();
      expect(headingThree).toBeInTheDocument();
    });
  });
});
