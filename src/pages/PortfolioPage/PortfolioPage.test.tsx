import { render, screen } from "@testing-library/react";
import PorfolioPage from "./PortfolioPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given a PortfolioPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show two headings with the 'Illustration and Design' and 'Portfolio' texts", () => {
      const expectedHeadingOne = /Illustration and Design/i;
      const expectedHeadingTwo = /Portfolio/i;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <PorfolioPage />
          </Provider>
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
