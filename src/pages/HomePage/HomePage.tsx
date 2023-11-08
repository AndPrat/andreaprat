import { Helmet } from "react-helmet";
import Typewriter from "typewriter-effect";
import "./HomePage.css";

const HomePage = (): React.ReactElement => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <meta name="description" content="Home of Andrea Prat web" />
      </Helmet>
      <div className="home-page">
        <div className="container container--flex home-page__container">
          <div className="home-page__block">
            <div className="home-page__block--mini">
              <h2 className="home-page__salutation">{`G'day! I'm Andrea`}</h2>
              <p className="home-page__presentation">{`I'm a creative frontend Developer, graphic designer & illustrator based in Barcelona and`}</p>
              <p className="home-page__presentation--change">
                <Typewriter
                  options={{
                    strings: [
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
                I am passionate about the use of
                <em className="is-colored">
                  {["c", "o", "l", "o", "r"].map((character, idx) => (
                    <span key={idx}>{character}</span>
                  ))}
                </em>{" "}
                in projects and being able to work with creativity in all areas:
                design, illustration and code.
              </p>
            </div>
          </div>
          <div className="home-page__block">
            <div className="home-page__block--mini"></div>
          </div>
          <div className="home-page__block">
            <div className="home-page__block--mini">
              <h2 className="home-page__title">Some of my latest work</h2>
            </div>
          </div>
          <div className="home-page__block">
            <div className="home-page__block--mini">
              <h2 className="home-page__title">Personal projects</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
