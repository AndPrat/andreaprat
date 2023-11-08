import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import paths from "../../routers/paths/paths";

const NavigationBar = (): React.ReactElement => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink to="" className="navigation__link">
            Illustration and Design
          </NavLink>
          <NavLink to="" className="navigation__link">
            Code
          </NavLink>
          <NavLink to={paths.aboutPage} className="navigation__link">
            About
          </NavLink>
          <NavLink to={paths.contactPage} className="navigation__link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
