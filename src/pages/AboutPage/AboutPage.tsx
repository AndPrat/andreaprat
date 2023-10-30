import "./AboutPage.css";

const AboutPage = (): React.ReactElement => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>About</title>
      <meta name="description" content="About Andrea Prat" />
      <div className="about-page">
        <h2 className="about-page__title">About me</h2>
        <p className="about-page__information">
          {`Hello! I'm Andrea Prat, a creative frontend developer & graphic desing
          and illustrator w/ a focus on creative project design.`}
        </p>
      </div>
    </>
  );
};

export default AboutPage;
