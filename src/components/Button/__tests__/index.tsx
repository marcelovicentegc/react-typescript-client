import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Button, ButtonType } from "..";
import { render } from "../../../utils/render";
import { fireEvent } from "@testing-library/react";
import { theme } from "../../../utils/theme";

describe("<Button /> test case", () => {
  test("test ids are in the document", () => {
    const { getByTestId } = render(<Button label="Click me" />);

    expect(getByTestId("buttonWrapper")).toBeInTheDocument();
    expect(getByTestId("styledButton")).toBeInTheDocument();
    expect(getByTestId("label")).toBeInTheDocument();
  });

  test("onClick prop is called", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button label="Click me" onClick={onClick} />
    );

    fireEvent.click(getByTestId("styledButton"), { button: 1 });
    expect(onClick).toHaveBeenCalled();
  });

  test("renders secondary style", () => {
    const { getByTestId } = render(
      <Button label="Click me" type={ButtonType.secondary} />
    );

    expect(getByTestId("styledButton")).toHaveStyle(
      `background-color: ${theme.color.white1};
      color: ${theme.color.blue1};`
    );
  });

  test("renders passed label prop", () => {
    const { getByTestId } = render(<Button label="Click me" />);

    expect(getByTestId("label")).toHaveTextContent("Click me");
  });
});
