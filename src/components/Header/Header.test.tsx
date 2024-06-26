import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Given a Header component", () => {
  describe("When is rendered", () => {
    test("Then it should show a 'Andrea Prat' text in a heading", () => {
      const ResizeObserverMock = vi.fn(() => ({
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      }));

      vi.stubGlobal("ResizeObserver", ResizeObserverMock);
      const expectedText = /andrea prat/i;

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const headerText = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(headerText).toBeInTheDocument();
    });
  });
});
