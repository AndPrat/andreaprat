import Marquee from "react-fast-marquee";
import paths from "../../routers/paths/paths";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Header.css";
import Day from "../Day/Day";

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <div className="container--flex header__container">
        <div className="header__block">
          <div className="header__block--mini">
            <Marquee autoFill={true}>
              {" "}
              <Day />
            </Marquee>
          </div>
        </div>
      </div>
      <div className="header__content">
        <div className="header--gradient"></div>
        <a href={paths.homePage}>
          <h1 className="header__text">Andrea Prat</h1>
        </a>
        <NavigationBar />
      </div>
    </header>
  );
};

export default Header;
