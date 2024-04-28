import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import paths from "../../routers/paths/paths";
import React from "react";

const NavigationBar = (): React.ReactElement => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink to={paths.portfolioPage} className="navigation__link">
            Portfolio
          </NavLink>
          <NavLink to={paths.codePage} className="navigation__link">
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
