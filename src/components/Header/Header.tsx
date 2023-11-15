import paths from "../../routers/paths/paths";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <a href={paths.homePage}>
        <h1 className="header__text">Andrea Prat</h1>
      </a>
      <NavigationBar />
    </header>
  );
};

export default Header;
