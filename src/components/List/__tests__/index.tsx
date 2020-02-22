import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { List } from "..";
import { render } from "../../../utils/render";
import { tips } from "../../../utils/mocks";
import { fireEvent } from "@testing-library/react";

describe("<List /> test case", () => {
  test("test ids are in the document and items are rendered", () => {
    const { getByTestId, getAllByTestId } = render(<List items={tips} />);

    expect(getByTestId("unorderedList")).toBeInTheDocument();
    expect(getAllByTestId("listItem")).toHaveLength(tips.length);
  });

  test("renders items with extra functionalities", () => {
    const mockFunction = jest.fn();
    const { getAllByTestId } = render(
      <List
        items={tips}
        removeItem={mockFunction}
        displayItemEditionModal={mockFunction}
      />
    );

    expect(getAllByTestId("listItem")).toMatchSnapshot();
  });

  test("renders edit option when on edit mode", () => {
    const mockFunction = jest.fn();
    const { queryAllByText } = render(
      <List
        items={tips}
        displayItemEditionModal={mockFunction}
        getCurrentTipLabel={mockFunction}
        setTipKey={mockFunction}
      />
    );

    expect(queryAllByText(/♻️/i)).toHaveLength(tips.length);
  });

  test("renders remove option when removeItem function is passed", () => {
    const removeItem = jest.fn();
    const { queryAllByText } = render(
      <List items={tips} removeItem={removeItem} />
    );

    const removeItemButton = queryAllByText(/➖/i);
    expect(removeItemButton).toHaveLength(tips.length);

    for (let i = 0; i < removeItemButton.length; i++) {
      fireEvent.click(removeItemButton[i]);
    }

    expect(removeItem).toHaveBeenCalledTimes(removeItemButton.length);
  });
});
