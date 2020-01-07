import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "..";
import { render } from "../../../utils/render";
import { fireEvent } from "@testing-library/react";
import * as LandingPageContext from "../../../contexts/LandingPageContext";

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
    window.open = jest.fn();
    const state: LandingPageContext.LandingPageState = { modal: null };
    const hideTipsModal = jest.fn(() => {
      state.modal = null;
    });
    const displayTipsModal = jest.fn(() => {
      state.modal = LandingPageContext.ModalState.tips;
    });
    const dispatchCallback = jest.fn();
    jest
      .spyOn(LandingPageContext, "useLandingPageContext")
      .mockImplementation(() => {
        return {
          state,
          displayTipsModal,
          hideTipsModal,
          dispatch: dispatchCallback,
          displayTipAdditionModal: dispatchCallback,
          displayTipEditionModal: dispatchCallback,
          addTip: dispatchCallback,
          removeTip: dispatchCallback,
          editTip: dispatchCallback
        };
      });

    const { getByText } = render(<Header />);

    const tips = getByText("Tips");

    fireEvent.click(tips);
    expect(displayTipsModal).toHaveBeenCalled();
    expect(state.modal === LandingPageContext.ModalState.tips);
    fireEvent.click(tips);
    expect(hideTipsModal).toHaveBeenCalled();
    expect(state.modal === null);
    fireEvent.click(getByText("Github"));
    expect(window.open).toHaveBeenCalled();
  });
});
