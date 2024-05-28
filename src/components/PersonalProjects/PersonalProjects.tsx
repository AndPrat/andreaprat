import "./PersonalProjects.css";

const PersonalProjects = (): React.ReactElement => {
  return (
    <div className="personalproject">
      <div className="personalproject__secction">
        <h2 className="personalproject__title">Personal projects</h2>
      </div>
      <div className="personalproject__secction--projects">
        <a
          href="https://escapadesenparella.cat"
          target="_blank"
          rel="noopener noreferrer"
          className="personalproject__image--link"
        >
          <img
            src="/images/logo-escapades-en-parella.png"
            alt="Escapadesenparella logo"
            width={10}
            className="personalproject__image"
          />
        </a>
        <a
          href="https://joanyinyang.com"
          target="_blank"
          rel="noopener noreferrer"
          className="personalproject__image--link"
        >
          <img
            src="/images/logo-escola-taitxi-joanyinyang.png"
            alt="Joanyinyang Taichi School logo"
            width={10}
            className="personalproject__image"
          />
        </a>
      </div>
    </div>
  );
};

export default PersonalProjects;
