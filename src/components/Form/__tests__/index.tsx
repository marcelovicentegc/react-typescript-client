import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Form } from "..";
import { render } from "../../../utils/render";
import { fireEvent } from "@testing-library/react";

const leftClick = { button: 1 };

const inputs = [
  {
    type: "text",
    onChange: jest.fn(
      (e: React.ChangeEvent<HTMLInputElement>) => e.target.value
    ),
    placeholder: "this is a tip 1",
    value: ""
  },
  {
    type: "text",
    onChange: jest.fn(
      (e: React.ChangeEvent<HTMLInputElement>) => e.target.value
    ),
    placeholder: "this is a tip 2",
    value: ""
  },
  {
    type: "text",
    onChange: jest.fn(
      (e: React.ChangeEvent<HTMLInputElement>) => e.target.value
    ),
    placeholder: "this is a tip 3",
    value: ""
  }
];

describe("<Form /> test case", () => {
  test("test ids are in the document", () => {
    const { getByTestId, queryAllByTestId } = render(<Form inputs={inputs} />);

    expect(getByTestId("formWrapper")).toBeInTheDocument();
    expect(getByTestId("styledForm")).toBeInTheDocument();
    expect(queryAllByTestId("input", { exact: false })).toHaveLength(3);
  });
});
