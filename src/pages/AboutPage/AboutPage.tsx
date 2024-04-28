import { Helmet } from "react-helmet";
import {
  iconAdobe,
  iconBlock,
  iconDiamond,
  iconFigma,
  iconGit,
  iconHtml,
  iconJavascript,
  iconMongodb,
  iconPalette,
  iconPencil,
  iconReact,
  iconRedux,
  iconSass,
  iconSketch,
  iconTypescript,
  iconVite,
  iconWebflow,
  iconWordpress,
} from "../../icons/icons";
import "./AboutPage.css";

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
                {`Hello! I'm Andrea Prat, a creative frontend developer & graphic designer
          and illustrator w/ a focus on creative project design.`}
              </p>
            </div>
            <div className="about-page__block--mini">
              <h2 className="about-page__title-secction">
                We are a match if you ...
              </h2>
              <p className="about-page__information">
                Look for a designer with a broad skill set ranging from
                developer web to graphic designer & illustration.
              </p>
              <a
                href="mailto:hello@andreaprat.cat"
                data-label="hello@andreaprat.cat"
                className="anchor anchor__gradient--large"
              >{`Let's talk!`}</a>
            </div>
          </div>
        </div>
        <div className="container container--flex about-page__container">
          <div className="about-page__block skills--block">
            <h4 className="about-page__title-important">
              {iconDiamond} Tech skills
            </h4>
            <ul className="about-page__information-important">
              <li className="about-page__skills">{iconReact}React.js</li>
              <li className="about-page__skills">{iconRedux}Redux.js</li>
              <li className="about-page__skills">{iconTypescript}TypeScript</li>
              <li className="about-page__skills">{iconJavascript}JavaScript</li>
              <li className="about-page__skills">
                {iconVite}Unit Test - Integration Test
              </li>
              <li className="about-page__skills"> {iconMongodb}MongoDB</li>
              <li className="about-page__skills"> {iconHtml}Html</li>
              <li className="about-page__skills"> {iconSass}Css - Sass</li>
              <li className="about-page__skills">
                {" "}
                {iconBlock}BEM methodology
              </li>
              <li className="about-page__skills"> {iconGit}Git</li>
            </ul>
          </div>
          <div className="about-page__block skills--block">
            <h4 className="about-page__title-important">
              {iconDiamond} Design skills
            </h4>
            <ul className="about-page__information-important">
              <li className="about-page__skills">
                {iconPencil}Graphic design - Illustration
              </li>
              <li className="about-page__skills">{iconAdobe}Adobe Package</li>
              <li className="about-page__skills">{iconAdobe}Photoshop</li>
              <li className="about-page__skills">{iconAdobe}Illustrator</li>
              <li className="about-page__skills">{iconAdobe}InDesign</li>
              <li className="about-page__skills">{iconPalette}Procreate</li>
              <li className="about-page__skills">{iconFigma}Figma</li>
              <li className="about-page__skills">{iconSketch}Sketch</li>
              <li className="about-page__skills">
                {iconWordpress}Wordpress - Elementor
              </li>
              <li className="about-page__skills">{iconWebflow}Webflow</li>
            </ul>
          </div>
        </div>
        <div className="container container--flex about-page__container">
          <div className="about-page__block">
            <h3 className="about-page__title-secction-secundary">Mini CV</h3>
            <ul className="about-page__information">
              <li className="about-page__miniCV">
                CallToAgency - Graphic Design (2023-Actually)
              </li>
              <li className="about-page__miniCV">
                Alfred Pons, vestuari laboral - Graphic Design Freelancer
                (2020-Actually)
              </li>
              <li className="about-page__miniCV">
                FrontWave - Graphic Design Freelancer (2022-23)
              </li>
              <li className="about-page__miniCV">
                Innoget - Graphic Design (2018-19)
              </li>
              <li className="about-page__miniCV">
                Promofarma - Graphic Design (2016-17)
              </li>
            </ul>
            <a
              className="anchor anchor__gradient--large"
              href="https://www.linkedin.com/in/andreaprat/"
              target="_blank"
              rel="noreferrer nofollow"
            >{`Linkedin`}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
