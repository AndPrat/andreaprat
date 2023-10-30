import {
  iconFacebook,
  iconGithub,
  iconHeart,
  iconInstagram,
  iconLinkedin,
  iconPinterest,
  iconTwitter,
} from "../../icons/icons";
import paths from "../../routers/paths/paths";

import "./Footer.css";

const Footer = (): React.ReactElement => {
  return (
    <div className="footer">
      <div className="footer__section">
        <img className="footer__logo" alt="" src="" />
      </div>
      <div className="footer__section">
        <h3 className="footer__title">ABOUT</h3>
        <ul>
          <li className="footer__information">
            <a
              href={paths.aboutPage}
              title="About Andrea Prat"
              className="footer__links"
            >
              About me
            </a>
          </li>
          <li className="footer__information">
            <a href="/" title="Contact Andrea Prat" className="footer__links">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__section">
        <h3 className="footer__title">SOCIAL MEDIA</h3>
        <p className="footer__information">
          Follow me on social media to find out the latest.
        </p>
        <div className="footer__media">
          <a
            href="https://www.linkedin.com/in/andreaprat/"
            title="Andrea Prat Linkedin"
            className="footer__icon"
          >
            {iconLinkedin}
          </a>
          <a
            href="https://github.com/AndPrat"
            title="Andrea Prat Github"
            className="footer__icon"
          >
            {iconGithub}
          </a>
          <a
            href="https://twitter.com/A_waterbalance"
            title="Andrea Prat Twitter"
            className="footer__icon"
          >
            {iconTwitter}
          </a>
          <a
            href="https://www.instagram.com/andreapratdesign/"
            title="Andrea Prat Instagram"
            className="footer__icon"
          >
            {iconInstagram}
          </a>
          <a
            href="https://www.pinterest.es/andreaprat/"
            title="Andrea Prat Pinterest"
            className="footer__icon"
          >
            {iconPinterest}
          </a>
          <a
            href="https://www.facebook.com/Andrea.Prat"
            title="Andrea Prat Facebook"
            className="footer__icon"
          >
            {iconFacebook}
          </a>
        </div>
      </div>
      <ul className="footer__conditions">
        <li className="footer__conditions-information">
          © 2023. All rights reserved.
        </li>
        <li className="footer__conditions-information">
          Developed in Catalonia with {iconHeart}
        </li>
      </ul>
    </div>
  );
};

export default Footer;
