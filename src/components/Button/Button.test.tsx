import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When is rendered with the text 'Let's talk!'", () => {
    test("Then it should show a button with the text 'Let's talk!'", () => {
      const mockFunction = vi.fn();
      const expectButtonText = "Let's talk!";

      render(
        <Button className="" actionOnClick={mockFunction}>
          {expectButtonText}
        </Button>,
      );

      const button = screen.getByRole("button", { name: expectButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
