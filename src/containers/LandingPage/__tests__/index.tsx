import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { LandingPage } from "..";
import { render } from "../../../utils/render";
import { fireEvent } from "@testing-library/react";
import * as LandingPageContext from "../../../contexts/LandingPageContext";
import { tips } from "../../../utils/mocks";

describe("<LandingPage /> test case", () => {
  test("test ids and default content are in the document", () => {
    const { container, getByTestId, getAllByTestId } = render(<LandingPage />);

    expect(getByTestId("greetingsBox")).toBeInTheDocument();
    expect(getAllByTestId("span")).toHaveLength(2);
    expect(container).toHaveTextContent(
      "The install worked successfully! Congratulations!"
    );
    expect(container).toHaveTextContent("Now go build something great 😃!");
    expect(container.getElementsByTagName("img")).toHaveLength(1);
  });

  //   test("renders tips addition card", () => {
  // const { getByText, getByTestId, getByRole } = render(<LandingPage />);

  // expect(getByTestId("innerCardWrapper")).toBeInTheDocument();
  // expect(getByText("🚀 Tips for a better web app (add a tip)")).toBeVisible();
  // fireEvent.click(getByRole("button"));
  // expect(getByText("➕ Add a tip")).toBeVisible();
  // const tips = getByText("Tips");

  // fireEvent.click(tips);
  // expect(displayTipsModal).toHaveBeenCalled();
  // expect(state.modal === LandingPageContext.ModalState.tips);
  // fireEvent.click(tips);
  // expect(hideTipsModal).toHaveBeenCalled();
  // expect(state.modal === null);
  //   });
});
