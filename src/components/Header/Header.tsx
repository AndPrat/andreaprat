import paths from "../../routers/paths/paths";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <div className="header--gradient"></div>
      <div className="header__content">
        <a href={paths.homePage}>
          <h1 className="header__text">Andrea Prat</h1>
        </a>
        <NavigationBar />
      </div>
    </header>
  );
};

export default Header;
