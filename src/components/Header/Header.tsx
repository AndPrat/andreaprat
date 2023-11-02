import NavigationBar from "../NavigationBar/NavigationBar";
import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <h1 className="header__text">Andrea Prat</h1>
      <NavigationBar />
    </header>
  );
};

export default Header;
