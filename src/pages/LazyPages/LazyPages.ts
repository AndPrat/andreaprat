import { lazy } from "react";

export const LazyAboutPage = lazy(() => import("../AboutPage/AboutPage.js"));

export const LazyHomePage = lazy(() => import("../HomePage/HomePage.js"));
