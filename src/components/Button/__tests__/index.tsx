import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "..";
import { render } from "../../../utils/render";

describe("<Button /> test case", () => {
  test("test ids are in the document", () => {
    const { getByTestId } = render(<Button label="Click me" />);

    expect(getByTestId("buttonWrapper")).toBeInTheDocument();
    expect(getByTestId("styledButton")).toBeInTheDocument();
    expect(getByTestId("label")).toBeInTheDocument();
  });
});
