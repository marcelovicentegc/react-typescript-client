import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "..";
import { render } from "../../../utils/render";
import { fireEvent } from "@testing-library/react";
import {
  LandingPageContext,
  ModalState
} from "../../../contexts/LandingPageContext";

describe("<Header /> test case", () => {
  test("test ids are in the document", () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId("headerWrapper")).toBeInTheDocument();
    expect(getByTestId("styledHeader")).toBeInTheDocument();
    expect(getByTestId("leftSide")).toBeInTheDocument();
    expect(getByTestId("appTitle")).toBeInTheDocument();
    expect(getByTestId("rightSide")).toBeInTheDocument();
  });

  test("renders buttons", () => {
    const { getByText } = render(<Header />);

    expect(getByText("Tips")).toBeInTheDocument();
    expect(getByText("Documentation")).toBeInTheDocument();
    expect(getByText("Github")).toBeInTheDocument();
  });

  test("buttons are clickable", () => {
    let modalState: ModalState | null = null;
    const dispatchCallback = jest.fn(() => {
      if (!modalState) {
        modalState = ModalState.tips;
      } else {
        modalState = null;
      }
    });
    window.open = jest.fn();
    const { getByText } = render(
      <LandingPageContext.Provider
        value={{ state: { modal: modalState }, dispatch: dispatchCallback }}
      >
        <Header />
      </LandingPageContext.Provider>
    );

    fireEvent.click(getByText("Tips"));
    fireEvent.click(getByText("Github"));
    expect(window.open).toHaveBeenCalled();
    expect(dispatchCallback).toHaveBeenCalled();
    expect(modalState).toBe(ModalState.tips);
    fireEvent.click(getByText("Tips"));
    expect(dispatchCallback).toHaveBeenCalledTimes(2);
    expect(modalState).toBe(null);
  });
});
