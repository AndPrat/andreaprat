import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import paths from "../../routers/paths/paths";
import { Suspense } from "react";
import { LazyAboutPage } from "../../pages/LazyPages/LazyPages";
import Footer from "../Footer/Footer";

const App = (): React.ReactElement => {
  return (
    <div className="content">
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
      <Footer />
    </div>
  );
};

export default App;
