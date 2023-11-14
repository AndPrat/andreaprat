import { useEffect, useState } from "react";
import { Message } from "../../types";
import Button from "../Button/Button";
import "./ContactForm.css";

interface NewMessageProps {
  actionOnSubmit: (message: Partial<Message>) => void;
}

const ContactForm = ({
  actionOnSubmit,
}: NewMessageProps): React.ReactElement => {
  const initalMessageData: Partial<Message> = {
    name: "",
    favoriteColor: "",
    email: "",
    subject: "",
    message: "",
  };

  const [newMessage, setNewMessage] =
    useState<Partial<Message>>(initalMessageData);

  const [disabled, setDisabled] = useState(true);

  const newMessageForm = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNewMessage((newMessage) => ({
      ...newMessage,
      [event.target.id]: event.target.value,
    }));
  };

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    actionOnSubmit(newMessage);
  };

  useEffect(() => {
    setDisabled(
      Object.values(newMessage).every((value) => {
        return Boolean(value);
      }),
    );
  }, [newMessage]);

  return (
    <form className="contact-form" onSubmit={submitForm}>
      <div className="contact-form__group">
        <label htmlFor="name" className="contact-form__label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="contact-form__input"
          required
          value={newMessage.name}
          onChange={newMessageForm}
        />
      </div>
      <div className="contact-form__group">
        <label htmlFor="email" className="contact-form__label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="contact-form__input"
          required
          value={newMessage.email}
          onChange={newMessageForm}
        />
      </div>
      <div className="contact-form__group">
        <label htmlFor="favoriteColor" className="contact-form__label">
          Favorite color
        </label>
        <input
          type="text"
          id="favoriteColor"
          className="contact-form__input"
          required
          value={newMessage.favoriteColor}
          onChange={newMessageForm}
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="subject" className="contact-form__label">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="contact-form__input"
          required
          value={newMessage.subject}
          onChange={newMessageForm}
        />
      </div>
      <div className="contact-form__group">
        <label htmlFor="message" className="contact-form__label">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="contact-from__textarea"
          required
          value={newMessage.message}
          onChange={newMessageForm}
        />
      </div>
      <div className="contact-form__group">
        <Button
          className="button button__gradient--large"
          type="submit"
          disabled={disabled}
        >
          Send email!
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
