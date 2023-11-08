import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Day from "./Day";

describe("Given a Day component", () => {
  describe("When it is rendered", () => {
    test("Then it should show ", () => {
      const today = new Date();
      const month = today.getMonth() + 1;

      const showDay = today.getDate() + "/" + month + "/" + today.getFullYear();
      const showTime =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      const expectedtext = `TODAY IS ${showDay} ✹ ${showTime}h`;

      render(
        <BrowserRouter>
          <Day />
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", { name: expectedtext });

      expect(heading).toBeInTheDocument();
    });
  });
});
