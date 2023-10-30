import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AboutPage from "./AboutPage";

describe("Given a AboutPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'About me'", () => {
      const expectHeading = "About me";

      render(
        <BrowserRouter>
          <AboutPage />
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", { name: expectHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
