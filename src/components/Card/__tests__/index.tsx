import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Card } from "..";
import { render } from "../../../utils/render";
import { fireEvent } from "@testing-library/react";
import { Button } from "../../Button";

describe("<Card /> test case", () => {
  test("test ids are in the document", () => {
    const { getByTestId, queryByTestId } = render(<Card />);

    expect(getByTestId("cardWrapper")).toBeInTheDocument();
    expect(getByTestId("styledCard")).toBeInTheDocument();
    expect(queryByTestId("title")).toBeNull();
  });

  test("renders passed title prop with no function associated with it", () => {
    const { getByTestId } = render(
      <Card withTitle={{ title: "Unit tests" }} />
    );

    expect(getByTestId("title")).toBeInTheDocument();
    expect(getByTestId("title")).toHaveTextContent("Unit tests");
  });

  test("renders passed title prop with function associated with it", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Card withTitle={{ title: "Unit tests", withFunction: onClick }} />
    );

    expect(getByTestId("title")).toHaveTextContent("Unit tests");
    fireEvent.click(getByTestId("title"), { button: 1 });
    expect(onClick).toHaveBeenCalled();
  });

  test("renders passed children prop", () => {
    const { container } = render(
      <Card>
        <Button label={"We are the children! 🚸"} />
      </Card>
    );

    expect(container).toHaveTextContent("We are the children! 🚸");
  });
});
