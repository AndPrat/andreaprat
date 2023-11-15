import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  LazyAboutPage,
  LazyContactPage,
  LazyHomePage,
  LazyPortfolioPage,
} from "../../pages/LazyPages/LazyPages";
import paths from "../../routers/paths/paths";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const App = (): React.ReactElement => {
  return (
    <div className="content">
      <Header />
      <Routes>
        <Route
          path={paths.aboutPage}
          element={
            <Suspense>
              <LazyAboutPage />
            </Suspense>
          }
        />
        <Route
          path={paths.homePage}
          element={
            <Suspense>
              <LazyHomePage />
            </Suspense>
          }
        />
        <Route
          path={paths.contactPage}
          element={
            <Suspense>
              <LazyContactPage />
            </Suspense>
          }
        />
        <Route
          path={paths.portfolioPage}
          element={
            <Suspense>
              <LazyPortfolioPage />
            </Suspense>
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
