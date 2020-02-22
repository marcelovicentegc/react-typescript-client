import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { LandingPage } from "..";
import { render } from "../../../utils/render";
import {
  fireEvent,
  wait,
  cleanup,
  waitForElement
} from "@testing-library/react";
import { tips } from "../../../utils/mocks";
import {
  LandingPageContext,
  ModalState
} from "../../../contexts/LandingPageContext";

afterEach(cleanup);

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
    const { getByText, getByTestId } = render(tree);

    await wait(() => {
      const modal = getByTestId("innerCardWrapper");
      expect(modal).toBeInTheDocument();
      fireEvent.click(modal);
      expect(mockFunction).toHaveBeenCalled();

      const card = getByText("🚀 Tips for a better web app (add a tip)");
      const listItems = document.getElementsByTagName("li");

      expect(card).toBeVisible();
      fireEvent.click(card);
      expect(mockFunction).toHaveBeenCalledTimes(2);

      expect(listItems.length).toBe(tips.length);
    });
  });

  test("renders tips addition modal", async () => {
    const tree = (
      <LandingPageContext.Provider
        value={{
          state: {
            modal: ModalState.tipAddition
          }
        }}
      >
        <LandingPage />
      </LandingPageContext.Provider>
    );
    const { queryByText, getByDisplayValue, container } = render(tree);

    const inputs = await waitForElement(() =>
      container.getElementsByTagName("input")
    );

    const inputValue = "Test what you're writing!";

    expect(queryByText(/Add a tip/i)).not.toBeNull();
    expect(inputs.length).toBe(1);
    fireEvent.change(inputs[0], {
      target: { value: inputValue }
    });
    expect(getByDisplayValue(inputValue)).toBeInTheDocument();
  });

  test("renders tips edition modal", async () => {
    const tree = (
      <LandingPageContext.Provider
        value={{
          state: {
            modal: ModalState.tipEdition
          }
        }}
      >
        <LandingPage />
      </LandingPageContext.Provider>
    );
    const { queryByText, getByTestId, getByDisplayValue } = render(tree);

    await wait(() => {
      const inputs = document.getElementsByTagName("input");
      const inputValue = "Test what you're writing!";

      expect(getByTestId("innerCardWrapper")).toBeInTheDocument();
      expect(queryByText(/Edit a tip/i)).not.toBeNull();

      expect(inputs.length).toBe(1);
      fireEvent.change(inputs[0], {
        target: { value: inputValue }
      });
      expect(getByDisplayValue(inputValue)).toBeInTheDocument();
    });
  });
});
