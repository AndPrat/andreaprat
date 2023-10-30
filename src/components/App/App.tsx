import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import paths from "../../routers/paths/paths";
import { Suspense } from "react";
import { LazyAboutPage } from "../../pages/LazyPages/LazyPages";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header />
      <NavigationBar />
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
    </div>
  );
};

export default App;
