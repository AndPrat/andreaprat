import { Helmet } from "react-helmet";
import "./CodePage.css";

const CodePage = (): React.ReactElement => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Code</title>
        <meta name="description" content="Code Portfolio" />
      </Helmet>
      <div className="code-page">
        <div className="container container--flex code-page__container">
          <div className="code-page__block">
            <h2 className="code-page__title">work</h2>
            <h3 className="code-page__title-secction">{`<code>`}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodePage;
