import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PortfolioData } from "../../dataPortfolio/dataPortfolioTypes";
import { PortfolioProjectsState } from "./types";

const initialPortfolioProjectsState: PortfolioProjectsState = {
  portfolioProjects: [],
};

const portfolioProjectsSlice = createSlice({
  name: "portfolioProjects",
  initialState: initialPortfolioProjectsState,
  reducers: {
    loadPortfolioProjects: (
      _currentPortfolioProjectsState,
      action: PayloadAction<PortfolioData[]>,
    ): PortfolioProjectsState => ({ portfolioProjects: action.payload }),
  },
});

export const portfolioProjectsReducer = portfolioProjectsSlice.reducer;
export const { loadPortfolioProjects: loadPortfolioProjectsActionCreator } =
  portfolioProjectsSlice.actions;
