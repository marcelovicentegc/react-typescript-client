import React from "react";
import { FormWrapper, StyledForm } from "./style";
import { Input } from "../Input";
import { generateKey } from "../../utils/generateKey";

interface Input extends Omit<React.HTMLProps<HTMLInputElement>, "ref" | "as"> {}

interface Props extends Omit<React.HTMLProps<HTMLFormElement>, "ref" | "as"> {
  inputs: Input[];
}

export const Form: React.SFC<Props> = ({ inputs, ...props }) => {
  return (
    <FormWrapper>
      <StyledForm {...props}>
        {inputs.map(input => {
          return <Input {...input} key={generateKey(20)} />;
        })}
      </StyledForm>
    </FormWrapper>
  );
};
