import { Helmet } from "react-helmet";
import "./AboutPage.css";
import { iconDiamond } from "../../icons/icons";
import Button from "../../components/Button/Button";

const AboutPage = (): React.ReactElement => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <meta name="description" content="About Andrea Prat" />
      </Helmet>
      <div className="about-page">
        <div className="container container--flex about-page__container">
          <img
            src="/images/Andrea-blue.png"
            alt="Andrea Polaroiod photos"
            width={250}
            className="about-page__photo"
          />
          <div className="about-page__block">
            <div className="about-page__block--mini">
              <h2 className="about-page__title">About me</h2>
              <p className="about-page__information">
                {`Hello! I'm Andrea Prat, a creative frontend developer & graphic desing
          and illustrator w/ a focus on creative project design.`}
              </p>
            </div>
            <div className="about-page__block--mini">
              <h2 className="about-page__title-secction">
                We are a match if you ...
              </h2>
              <p className="about-page__information">
                Look for a designer with a broad skill set ranging from
                developer web to graphic design & illustration.
              </p>
              <Button className="button button__gradient">{`Let's talk!`}</Button>
            </div>
          </div>
        </div>
        <div className="container">
          <h4 className="about-page__title-important">
            {iconDiamond} Main skills
          </h4>
          <p className="about-page__information-important">
            React.js • Redux.js • TypeScript • Unit Test • Graphic design •
            Adobe Package • Procreate
          </p>
        </div>
        <div className="container">
          <h3 className="about-page__title-secction-secundary">Mini CV</h3>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
