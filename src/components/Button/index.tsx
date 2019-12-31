import React from "react";
import { ButtonWrapper, StyledButton, Label } from "./style";

export enum ButtonType {
  primary,
  secondary,
  tertiary
}

interface Props extends Omit<React.HTMLProps<HTMLButtonElement>, "type"> {
  label: string;
  type?: ButtonType;
}

export const Button: React.FC<Props> = ({ label, type }, props) => {
  return (
    <ButtonWrapper>
      <StyledButton {...props} type={type}>
        <Label>{label}</Label>
      </StyledButton>
    </ButtonWrapper>
  );
};
