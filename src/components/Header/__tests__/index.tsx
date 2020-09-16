import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "..";
import { fireEvent, render } from "@testing-library/react";
import { withTheme } from "../../../utils/render";
import { rootStore } from "../../../stores/RootStore";
import { ModalState } from "../../../contexts/LandingPageContext";

describe("<Header /> test case", () => {
  test("test ids are in the document", () => {
    const { getByTestId } = render(withTheme(<Header />));

    expect(getByTestId("headerWrapper")).toBeInTheDocument();
    expect(getByTestId("styledHeader")).toBeInTheDocument();
    expect(getByTestId("leftSide")).toBeInTheDocument();
    expect(getByTestId("appTitle")).toBeInTheDocument();
    expect(getByTestId("rightSide")).toBeInTheDocument();
  });

  test("renders buttons", () => {
    const { getByText } = render(withTheme(<Header />));

    expect(getByText("Tips")).toBeInTheDocument();
    expect(getByText("Documentation")).toBeInTheDocument();
    expect(getByText("Github")).toBeInTheDocument();
  });

  test("buttons are clickable", () => {
    window.open = jest.fn();
    rootStore.uiStore.modal = null;
    rootStore.uiStore.displayTipsModal = jest.fn(() => {
      rootStore.uiStore.modal = ModalState.tips;
    });
    rootStore.uiStore.hideTipsModal = jest.fn(() => {
      rootStore.uiStore.modal = null;
    });

    const { getByText } = render(withTheme(<Header />));

    const tips = getByText("Tips");

    fireEvent.click(tips);
    expect(rootStore.uiStore.displayTipsModal).toHaveBeenCalled();
    expect(rootStore.uiStore.modal).toBe(ModalState.tips);
    fireEvent.click(tips);
    expect(rootStore.uiStore.hideTipsModal).toHaveBeenCalled();
    expect(rootStore.uiStore.modal).toBeNull();
    fireEvent.click(getByText("Github"));
    expect(window.open).toHaveBeenCalled();
  });
});
