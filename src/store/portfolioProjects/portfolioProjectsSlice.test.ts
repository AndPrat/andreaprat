import { PortfolioData } from "../../dataPortfolio/dataPortfolioTypes";
import { portfolioProjectsListMock } from "../../mocks/projectsPortfolioDataMock";
import {
  loadPortfolioProjectsActionCreator,
  portfolioProjectsReducer,
} from "./portfolioProjectsSlice";
import { PortfolioProjectsState } from "./types";

describe("Given a portfolioProjectsReducer", () => {
  describe("When it recives a loadPortfolioProjects", () => {
    test("Then it should return a new state with the received two portfolioProjects", () => {
      const currentPortfolioProjectsState: PortfolioProjectsState = {
        portfolioProjects: [],
      };

      const portfolioProjects: PortfolioData[] = portfolioProjectsListMock;

      const loadPortfolioProjectsAction =
        loadPortfolioProjectsActionCreator(portfolioProjects);

      const newPortfolioProjectsState = portfolioProjectsReducer(
        currentPortfolioProjectsState,
        loadPortfolioProjectsAction,
      );

      expect(newPortfolioProjectsState).toHaveProperty(
        "portfolioProjects",
        portfolioProjects,
      );
    });
  });
});
