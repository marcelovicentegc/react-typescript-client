import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { LandingPage, LandingPageClass } from "..";
import { waitForElement, render } from "@testing-library/react";
import { ModalState } from "../../../contexts/LandingPageContext";
import { withStoreProvider, withTheme } from "../../../utils/render";
import { rootStore } from "../../../stores/RootStore";

describe("<LandingPage /> test case", () => {
  test("test ids and default content are in the document", () => {
    const { container, getByTestId, getAllByTestId } = render(
      withTheme(withStoreProvider(<LandingPageClass />, { store: rootStore }))
    );

    expect(getByTestId("greetingsBox")).toBeInTheDocument();
    expect(getAllByTestId("span")).toHaveLength(2);
    expect(container).toHaveTextContent(
      "The install worked successfully! Congratulations!"
    );
    expect(container).toHaveTextContent("Now go build something great 😃!");
    expect(container.getElementsByTagName("img")).toHaveLength(1);
  });

  test("renders tips card", async () => {
    let modal: HTMLElement;
    const hideModalAndTest = () => {
      rootStore.uiStore.modal = null;
      expect(queryByTestId("innerCardWrapper")).toBeNull();
    };
    const displayModalAndTest = async (state: ModalState) => {
      rootStore.uiStore.modal = state;

      modal = await waitForElement(() => getByTestId("innerCardWrapper"));

      expect(modal).toBeVisible();
    };

    const { getByTestId, queryByTestId } = render(
      withTheme(withStoreProvider(<LandingPageClass />, { store: rootStore }))
    );

    await displayModalAndTest(ModalState.tips);
    hideModalAndTest();
    await displayModalAndTest(ModalState.tipAddition);
    hideModalAndTest();
    await displayModalAndTest(ModalState.tipEdition);
  });
});
