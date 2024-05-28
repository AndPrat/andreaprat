import { Helmet } from "react-helmet";
import ContactForm from "../../components/ContactForm/ContactForm";
import sendEmail from "../../hooks/useMessageApi.js";
import { Message } from "../../types.js";
import "./ContactPage.css";

const ContactPage = (): React.ReactElement => {
  const actionOnSubmit = async (newMessageToRecived: Partial<Message>) => {
    sendEmail(newMessageToRecived);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
        <meta name="description" content="Contact page" />
      </Helmet>
      <div className="contact-page">
        <div className="container container--flex contact-page__container">
          <div className="contact-page__block">
            <div className="contact-page__block--mini">
              <h3 className="contact-page__title-secction">CONTACT</h3>
              <h2 className="contact-page__title">Get in touch!</h2>
              <p className="contact-page__information">{`Do you want to get ahold of me? Dropping a line to say good day? Got a project in mind? Ask for my resume? We can build something amazing together!`}</p>
              <p className="contact-page__information">{`I'd love to hear from you! Just, fill out the form below or send me an email and I'll get back to you as soon as possible!`}</p>
              <span className="contact-page__title-important">
                hello@andreaprat.cat
              </span>
              <div className="contact-page__block">
                <div className="contact-page__block--mini">
                  <ContactForm actionOnSubmit={actionOnSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
