import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a NavLink with 'Portfolio' text", () => {
      const ResizeObserverMock = vi.fn(() => ({
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      }));

      vi.stubGlobal("ResizeObserver", ResizeObserverMock);
      const expectedText = "Portfolio";

      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );

      const navigationLink = screen.getByRole("link", {
        name: expectedText,
      });

      expect(navigationLink).toBeInTheDocument();
    });
  });
});
