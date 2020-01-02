import React from "react";
import { ButtonWrapper, StyledButton, Label } from "./style";

export enum ButtonType {
  primary,
  secondary,
  tertiary
}

interface Props
  extends Omit<React.HTMLProps<HTMLButtonElement>, "type" | "as" | "ref"> {
  label: string;
  type?: ButtonType;
}

export const Button: React.FC<Props> = ({ label, type, ...props }) => {
  return (
    <ButtonWrapper data-testid="buttonWrapper">
      <StyledButton {...props} buttonType={type ? type : ButtonType.primary}>
        <Label>{label}</Label>
      </StyledButton>
    </ButtonWrapper>
  );
};
