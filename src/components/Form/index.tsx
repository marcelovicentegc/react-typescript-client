import React from "react";
import { FormWrapper, StyledForm } from "./style";
import { Input } from "../Input";

interface Props extends Omit<React.HTMLProps<HTMLFormElement>, "ref" | "as"> {
  inputs: React.HTMLProps<HTMLInputElement>[];
}

export const Form: React.SFC<Props> = ({ inputs, ...props }) => {
  return (
    <FormWrapper>
      <StyledForm {...props}>
        {inputs.map((input, i) => {
          return <Input {...input} key={i} />;
        })}
      </StyledForm>
    </FormWrapper>
  );
};
