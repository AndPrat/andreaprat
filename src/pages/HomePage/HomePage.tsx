import { Helmet } from "react-helmet";
import Typewriter from "typewriter-effect";
import "./HomePage.css";
import paths from "../../routers/paths/paths";
import PersonalProjects from "../../components/PersonalProjects/PersonalProjects";

const HomePage = (): React.ReactElement => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <meta name="description" content="Home of Andrea Prat web" />
      </Helmet>
      <main className="home-page">
        <section className="home-page__section">
          <div className="container container--flex home-page__container">
            <div className="home-page__block home-page__block--50">
              <div className="home-page__block--mini">
                <h2 className="home-page__salutation">{`Hello! I'm Andrea!`}</h2>
                <p className="home-page__presentation">{`I'm a creative frontend Developer, graphic designer & illustrator based in Barcelona and`}</p>
                <p className="home-page__presentation--change">
                  <Typewriter
                    options={{
                      strings: [
                        "I always drink a cup of tea in the morning 🍵",
                        "world traveller 🌏",
                        "postcard lover 📬",
                        "two-planker 🎿",
                        "hawaiian pizza eater 🍕",
                        "travel pin collector 📌",
                        "I wear printed socks 🧦",
                        "regular 🛹",
                        "trekking ⛰️",
                        "Taichi teacher ☯️",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </p>
                <p className="home-page__presentation">
                  {`I'm passionate about the use of`}
                  <em className="is-colored"> color </em> in projects and being
                  able to work with creativity in all areas: design,
                  illustration and code.
                </p>
                <div className="anchor anchor__container">
                  <a
                    href={paths.aboutPage}
                    className="anchor anchor__gradient--large"
                  >
                    Know more about!
                  </a>
                  <a
                    href={paths.portfolioPage}
                    className="anchor anchor__gradient--large"
                  >
                    See projects
                  </a>
                </div>
              </div>
            </div>
            <div className="home-page__block home-page__block--50">
              <div className="home-page__block--image">
                <img
                  src="/images/andreaprat_postcards.png"
                  alt="Postcards illustrations"
                  width={800}
                  className="about-page__photo"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container container--flex home-page__container">
            <div className="home-page__block">
              <div className="home-page__block--mini">
                <h2 className="home-page__title">Some of my latest work</h2>
              </div>
            </div>
            <div className="home-page__block">
              <PersonalProjects />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
