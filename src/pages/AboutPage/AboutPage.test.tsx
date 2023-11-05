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
  test("Then it should show a image with the alt text 'Andrea Polaroiod photos'", () => {
    const expectImageAlt = "Andrea Polaroiod photos";

    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>,
    );

    const imageAlt = screen.getByAltText(expectImageAlt);

    expect(imageAlt).toBeInTheDocument();
  });
});
