import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { LandingPage } from "..";
import { render } from "../../../utils/render";
import { waitForElement } from "@testing-library/react";
import { tips } from "../../../utils/mocks";
import {
  LandingPageContext,
  ModalState
} from "../../../contexts/LandingPageContext";

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

  test("renders suspense fallback", () => {
    const mockFunction = jest.fn();
    const tree = (
      <LandingPageContext.Provider
        value={{
          state: {
            modal: ModalState.tips,
            tips
          },
          dispatch: mockFunction
        }}
      >
        <LandingPage />
      </LandingPageContext.Provider>
    );
    const { getByText } = render(tree);

    expect(getByText("loading...")).toBeInTheDocument();
  });

  test("renders tips card", async () => {
    const mockFunction = jest.fn();
    const tree = (
      <LandingPageContext.Provider
        value={{
          state: {
            modal: ModalState.tips,
            tips
          },
          dispatch: mockFunction
        }}
      >
        <LandingPage />
      </LandingPageContext.Provider>
    );
    const { getByTestId } = render(tree);

    const modal = await waitForElement(() => getByTestId("innerCardWrapper"));

    expect(modal).toBeVisible();
  });
});
