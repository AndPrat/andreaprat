import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LazyAboutPage } from "../../pages/LazyPages/LazyPages";
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
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
