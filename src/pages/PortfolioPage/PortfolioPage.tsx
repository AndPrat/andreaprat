import { Helmet } from "react-helmet";
import "./PortfolioPage.css";
import PortfolioList from "../../components/PortfolioList/PortfolioList";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect } from "react";
import { loadPortfolioProjectsActionCreator } from "../../store/portfolioProjects/portfolioProjectsSlice";
import portfolioProjects from "../../dataPortfolio/dataPortfolio";

const PorfolioPage = (): React.ReactElement => {
  const projectsPorfolioProjects = useAppSelector(
    (state) => state.portfolioProjectsState.portfolioProjects,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const projects = portfolioProjects;
      if (projects) {
        dispatch(loadPortfolioProjectsActionCreator(projects));
      }
    })();
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio</title>
        <meta name="description" content="Ilustration and design Portfolio" />
      </Helmet>
      <div className="portfolio-page">
        <div className="container container--flex portfolio-page__container">
          <div className="portfolio-page__block">
            <h2 className="portfolio-page__title">Illustration and Design</h2>
            <h3 className="portfolio-page__title-secction">Portfolio</h3>
            {projectsPorfolioProjects.length > 0 ? <PortfolioList /> : "Empty"}
          </div>
        </div>
      </div>
    </>
  );
};

export default PorfolioPage;
