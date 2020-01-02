import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Button } from "..";

describe("<Button /> test case", () => {
  test("test ids are in the document", () => {
    const { container } = render(<Button label="Click me" />);
    expect(container).toMatchSnapshot();
  });
});
