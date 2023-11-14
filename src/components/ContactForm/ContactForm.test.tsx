import { render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { messageMock } from "../../mocks/messageMock";
import userEvent from "@testing-library/user-event";

describe("Given a ContactForm component", () => {
  const expectedNameContact = "Name";
  const expectedNameEmail = "Email";
  const expectedNameSubject = "Subject";
  const expectedNameMessage = "Message";
  const expectedFavoriteColor = "Favorite color";

  const mockSubmit = vi.fn();

  describe("When it is rendered", () => {
    test("Then it should show an 'Name', 'Email', 'Subject', 'Message' and 'Favorite color' fields texts", () => {
      render(<ContactForm actionOnSubmit={mockSubmit} />);

      const nameContact = screen.getByLabelText(expectedNameContact);
      const nameEmail = screen.getByLabelText(expectedNameEmail);
      const nameSubject = screen.getByLabelText(expectedNameSubject);
      const nameMessage = screen.getByLabelText(expectedNameMessage);
      const nameFavoriteColor = screen.getByLabelText(expectedFavoriteColor);

      expect(nameContact).toBeInTheDocument();
      expect(nameEmail).toBeInTheDocument();
      expect(nameSubject).toBeInTheDocument();
      expect(nameMessage).toBeInTheDocument();
      expect(nameFavoriteColor).toBeInTheDocument();
    });
  });

  test("Then it should show a button with 'Send email!' text", () => {
    const expectedButtonText = "Send email!";

    render(<ContactForm actionOnSubmit={mockSubmit} />);

    const button = screen.getByRole("button", { name: expectedButtonText });

    expect(button).toBeInTheDocument();
  });

  describe("When is rendered and the user types in every input", () => {
    test("Then it should show a full form", async () => {
      render(<ContactForm actionOnSubmit={mockSubmit} />);

      const expectedInputName = messageMock.name;
      const expectedInputEmail = messageMock.email;
      const expectedInputFavoriteColor = messageMock.favoriteColor;
      const expectedInputSubject = messageMock.subject;
      const expectedInputMessage = messageMock.message;

      const nameMessage = screen.getByLabelText(expectedNameContact);
      const EmailMessage = screen.getByLabelText(expectedNameEmail);
      const favoriteColorMessage = screen.getByLabelText(expectedFavoriteColor);
      const subjectMessage = screen.getByLabelText(expectedNameSubject);
      const messageMessage = screen.getByLabelText(expectedNameMessage);

      await userEvent.type(nameMessage, expectedInputName);
      await userEvent.type(EmailMessage, expectedInputEmail);
      await userEvent.type(favoriteColorMessage, expectedInputFavoriteColor);
      await userEvent.type(subjectMessage, expectedInputSubject);
      await userEvent.type(messageMessage, expectedInputMessage);

      expect(nameMessage).toHaveValue(expectedInputName);
      expect(EmailMessage).toHaveValue(expectedInputEmail);
      expect(favoriteColorMessage).toHaveValue(expectedInputFavoriteColor);
      expect(subjectMessage).toHaveValue(expectedInputSubject);
      expect(messageMessage).toHaveValue(expectedInputMessage);
    });
  });
});
