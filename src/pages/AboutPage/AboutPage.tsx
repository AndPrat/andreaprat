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
      <main className="about-page">
        <section className="about-page__section about-page__section--header">
          <div className="container container--flex about-page__container">
            <img
              src="/images/Andrea-blue.png"
              alt="Andrea Polaroiod photos"
              width={250}
              className="about-page__photo"
            />
            <div className="about-page__block--header">
              <div className="about-page__block--mini">
                <h2 className="about-page__title">About me</h2>
                <p className="about-page__information">
                  {`Hello! I'm Andrea Prat, a creative frontend developer & graphic designer
          and illustrator with a focus on creative project design.`}
                </p>
              </div>
              <div className="about-page__block--mini">
                <h2 className="about-page__title-secction">
                  We are a match if you ...
                </h2>
                <p className="about-page__information">
                  If your are looking for a designer with a broad skill set
                  ranging from web developer to graphic designer & illustration.
                </p>
                <a
                  href="mailto:hello@andreaprat.cat"
                  data-label="hello@andreaprat.cat"
                  className="anchor anchor__gradient--large"
                >{`Let's talk!`}</a>
              </div>
            </div>
          </div>
        </section>
        <section className="about-page__section about-page__section--skills">
          <div className="container container--flex about-page__container">
            <div className="about-page--skills">
              <div className="about-page__block skills--block">
                <h3 className="about-page__title-important">
                  {iconDiamond} - Tech skills
                </h3>
                <ul className="about-page__information-important">
                  <li className="about-page__skills">
                    <span className="about-page__skills--title">
                      <i className="about-page__skills--icon">{iconReact}</i>
                      React.js
                    </span>
                    <p className="about-page__skills--information">
                      Is a free and open-source front-end JavaScript library for
                      building user interfaces based on components.
                    </p>
                  </li>

                  <li className="about-page__skills">
                    <span className="about-page__skills--title">
                      <i className="about-page__skills--icon">{iconRedux}</i>
                      Redux.js
                    </span>
                    <p className="about-page__skills--information">
                      A JS library for predictable and maintainable global state
                      management.
                    </p>
                  </li>
                  <li className="about-page__skills">
                    <span className="about-page__skills--title">
                      <i className="about-page__skills--icon">
                        {iconTypescript}
                      </i>
                      TypeScript
                    </span>
                    <p className="about-page__skills--information">
                      Is a strongly typed programming language that builds on
                      JavaScript, giving you better tooling at any scale.
                    </p>
                  </li>
                  <li className="about-page__skills">
                    <span className="about-page__skills--title">
                      <i className="about-page__skills--icon">
                        {" "}
                        {iconJavascript}
                      </i>
                      JavaScript
                    </span>
                    <p className="about-page__skills--information">
                      Is a dynamic programming language.
                    </p>
                  </li>
                  <li className="about-page__skills">
                    <span className="about-page__skills--title">
                      <i className="about-page__skills--icon">{iconVite}</i>Unit
                      Test - Integration Test
                    </span>
                    <p className="about-page__skills--information">
                      Is a kind of white box testing, whereas Integration
                      Testing is a kind of black-box testing.
                    </p>
                  </li>
                  <li className="about-page__skills">
                    <span className="about-page__skills--title"></span>
                    <i className="about-page__skills--icon">{iconMongodb}</i>
                    MongoDB
                    <p className="about-page__skills--information">
                      Is a document database with the scalability and
                      flexibility that you want with the querying and indexing
                      that you need.
                    </p>
                  </li>
                  <li className="about-page__skills">
                    <span className="about-page__skills--title">
                      <i className="about-page__skills--icon">{iconHtml}</i>Html
                    </span>
                    <p className="about-page__skills--information">
                      Is a markup language for the web that defines the
                      structure of web pages.
                    </p>
                  </li>
                  <li className="about-page__skills">
                    <span className="about-page__skills--title">
                      <i className="about-page__skills--icon">{iconSass}</i>Css
                      - Sass
                    </span>
                    <p className="about-page__skills--information">
                      Is used to define styles for your web pages, including the
                      design, layout and variations in display for different
                      devices and screen sizes.
                    </p>
                  </li>
                  <li className="about-page__skills">
                    <span className="about-page__skills--title">
                      <i className="about-page__skills--icon">{iconBlock}</i>BEM
                      methodology
                    </span>
                    <p className="about-page__skills--information">
                      Is a component-based approach to web development. The idea
                      behind it is to divide the user interface into independent
                      blocks.
                    </p>
                  </li>
                  <li className="about-page__skills">
                    <span className="about-page__skills--title">
                      <i className="about-page__skills--icon">{iconGit}</i>Git
                    </span>
                    <p className="about-page__skills--information">
                      Is a distributed version control system that tracks
                      versions of files.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="about-page__block skills--block">
                <h3 className="about-page__title-important">
                  {iconDiamond}- Design skills
                </h3>
                <ul className="about-page__information-important">
                  <li className="about-page__skills">
                    <span className="about-page__skills--title">
                      <i className="about-page__skills--icon">{iconPencil}</i>
                      Graphic design - Illustration
                    </span>
                    <p className="about-page__skills--information">
                      Is an expression of the characteristics of graphic design
                      and illustration in one piece of work.
                    </p>
                  </li>
                  <li className="about-page__skills">
                    <span className="about-page__skills--title">
                      <i className="about-page__skills--icon">{iconAdobe} </i>{" "}
                      Adobe Package
                    </span>
                    <p className="about-page__skills--information">
                      A set of software developed by the company, going from one
                      end to the other, from creation, editing and
                      post-production of videos and images.
                    </p>
                  </li>
                  <li className="about-page__skills">
                    <span className="about-page__skills--title">
                      <i className="about-page__skills--icon">{iconAdobe}</i>
                      Photoshop
                    </span>
                    <p className="about-page__skills--information">
                      Is graphics editor developed and published by Adobe.
                    </p>
                  </li>
                  <li className="about-page__skills">
                    <span className="about-page__skills--title">
                      <i className="about-page__skills--icon">{iconAdobe} </i>
                      Illustrator
                    </span>
                    <p className="about-page__skills--information">
                      a vector graphics editor and design software developed and
                      marketed by Adobe.
                    </p>
                  </li>
                  <li className="about-page__skills">
                    <span className="about-page__skills--title">
                      <i className="about-page__skills--icon">{iconAdobe} </i>
                      InDesign
                    </span>
                    <p className="about-page__skills--information">
                      Is a desktop publishing and page layout designing software
                      application produced by Adobe.
                    </p>
                  </li>
                  <li className="about-page__skills">
                    <span className="about-page__skills--title">
                      <i className="about-page__skills--icon">
                        {" "}
                        {iconPalette}{" "}
                      </i>
                      Procreate
                    </span>
                    <p className="about-page__skills--information">
                      The most advanced painting app ever designed for a mobile
                      device.
                    </p>
                  </li>
                  <li className="about-page__skills">
                    <span className="about-page__skills--title">
                      <i className="about-page__skills--icon">{iconFigma} </i>
                      Figma
                    </span>
                    <p className="about-page__skills--information">
                      Is for people to create, share, and test designs for
                      websites, mobile apps, and other digital products and
                      experiences.
                    </p>
                  </li>
                  <li className="about-page__skills">
                    <span className="about-page__skills--title">
                      <i className="about-page__skills--icon">{iconSketch} </i>
                      Sketch
                    </span>
                    <p className="about-page__skills--information">
                      Is a vector graphics editor for macOS to create, team up,
                      prototype, and more.
                    </p>
                  </li>
                  <li className="about-page__skills">
                    <span className="about-page__skills--title">
                      <i className="about-page__skills--icon">
                        {iconWordpress}{" "}
                      </i>
                      Wordpress - Elementor
                    </span>
                    <p className="about-page__skills--information">
                      A user-friendly WordPress page builder that helps you
                      create visually appealing web pages without coding
                      knowledge.
                    </p>
                  </li>
                  <li className="about-page__skills">
                    <span className="about-page__skills--title">
                      <i className="about-page__skills--icon">{iconWebflow} </i>
                      Webflow
                    </span>
                    <p className="about-page__skills--information">
                      A SaaS application that allows designers to build
                      responsive websites with browser-based visual editing
                      software.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="about-page__section about-page__section--miCv">
          <div className="container container--flex about-page__container">
            <div className="about-page__block">
              <h3 className="about-page__title-secction-secundary">Mini CV</h3>
              <ul className="about-page__information">
                <li className="about-page__miniCV">
                  <span className="about-page__miniCV--title">
                    Call To Agency
                  </span>
                  <p className="about-page__miniCV--information">
                    Graphic Design (2023-2024)
                  </p>
                  <p className="about-page__miniCV--works">
                    Main duties: Web design and web development, brand design,
                    social media content design, campaings design, marketing
                    products design, presentations and data visualization
                    design, and marketing proposals design.
                  </p>
                </li>
                <li className="about-page__miniCV">
                  <span className="about-page__miniCV--title">Tàctic.cat</span>
                  <p className="about-page__miniCV--information">
                    Graphic Design Freelancer (2023)
                  </p>
                  <p className="about-page__miniCV--works">
                    Main duties: Web design, brand design, posters design and
                    catalogs design.
                  </p>
                </li>
                <li className="about-page__miniCV">
                  <span className="about-page__miniCV--title">
                    Alfred Pons, vestuari laboral
                  </span>
                  <p className="about-page__miniCV--information">
                    Graphic Design Freelancer (2020-Actually)
                  </p>
                  <p className="about-page__miniCV--works">
                    Main duties: Web design, brand design, posters design and
                    social media content design.
                  </p>
                </li>
                <li className="about-page__miniCV">
                  <span className="about-page__miniCV--title">FrontWave</span>
                  <p className="about-page__miniCV--information">
                    Graphic Design Freelancer (2022-2023)
                  </p>
                  <p className="about-page__miniCV--works">
                    Main duties: Web design and web development.
                  </p>
                </li>
                <li className="about-page__miniCV">
                  <span className="about-page__miniCV--title">Innoget</span>
                  <p className="about-page__miniCV--information">
                    Graphic Design (2018-2019)
                  </p>
                  <p className="about-page__miniCV--works">
                    Main duties: Brand design, campains design, presentations
                    design and marketing products design.
                  </p>
                </li>
                <li className="about-page__miniCV">
                  <span className="about-page__miniCV--title">Promofarma</span>
                  <p className="about-page__miniCV--information">
                    Graphic Design (2016-2017)
                  </p>
                  <p className="about-page__miniCV--works">
                    Main duties: Product image editing.
                  </p>
                </li>
              </ul>
              <a
                className="anchor anchor__gradient--large"
                href="https://www.linkedin.com/in/andreaprat/"
                target="_blank"
                rel="noreferrer nofollow"
              >{`Find me on Linkedin`}</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
