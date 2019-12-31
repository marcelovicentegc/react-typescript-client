import React from "react";
import { ButtonWrapper, StyledButton, Label } from "./style";

interface Props {
  label: string;
}

export const Button: React.FC<Props> = ({ label }) => {
  return (
    <ButtonWrapper>
      <StyledButton>
        <Label>{label}</Label>
      </StyledButton>
    </ButtonWrapper>
  );
};
