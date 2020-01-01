import React from "react";
import { CardWrapper, StyledCard } from "./style";

interface Props {
  children?: React.ReactNode;
}

export const Card: React.SFC<Props> = ({ children }) => {
  return (
    <CardWrapper>
      <StyledCard>{children}</StyledCard>
    </CardWrapper>
  );
};
