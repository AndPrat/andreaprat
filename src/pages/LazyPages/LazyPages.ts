import { lazy } from "react";

export const LazyAboutPage = lazy(() => import("../AboutPage/AboutPage.js"));

export const LazyHomePage = lazy(() => import("../HomePage/HomePage.js"));

export const LazyContactPage = lazy(
  () => import("../ContactPage/ContactPage.js"),
);

export const LazyPortfolioPage = lazy(
  () => import("../PortfolioPage/PortfolioPage.js"),
);
