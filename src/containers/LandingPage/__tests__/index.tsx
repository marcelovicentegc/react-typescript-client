import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { LandingPage } from "..";
import { waitForElement, render } from "@testing-library/react";
import { ModalState } from "../../../contexts/LandingPageContext";
import { withTheme, withStoreProvider } from "../../../utils/render";
import { rootStore } from "../../../stores/RootStore";

describe("<LandingPage /> test case", () => {
  test("test ids and default content are in the document", () => {
    const { container, getByTestId, getAllByTestId } = render(
      withTheme(<LandingPage />)
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
    rootStore.uiStore.modal = ModalState.tips;
    const { getByTestId } = render(withTheme(<LandingPage />));

    const modal = await waitForElement(() => getByTestId("innerCardWrapper"));

    expect(modal).toBeVisible();
  });
});
