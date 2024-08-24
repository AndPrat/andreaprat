import { render, screen } from "@testing-library/react";
import { setupStore } from "../../store";
import { Provider } from "react-redux";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { portfolioProjectsListMock } from "../../mocks/projectsPortfolioDataMock";
import PortfolioList from "./PortfolioList";

describe("Given a PortfolioList component", () => {
  describe("When it is rendered", () => {
    test("Then it should shouw a heading with the text 'Dit&Fet!'", () => {
      const expectedHeadingText = /Dit&Fet!/i;
      const store = setupStore({
        portfolioProjectsState: {
          portfolioProjects: portfolioProjectsListMock,
        },
      });

      render(
        <BrowserRouter>
          <Provider store={store}>
            <React.Suspense>
              <React.Suspense>
                <PortfolioList />
              </React.Suspense>
            </React.Suspense>
          </Provider>
          ,
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
