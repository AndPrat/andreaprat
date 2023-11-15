import { Helmet } from "react-helmet";
import "./PortfolioPage.css";

const PorfolioPage = (): React.ReactElement => {
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PorfolioPage;
