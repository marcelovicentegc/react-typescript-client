import React from "react";
import { CardWrapper, StyledCard, Title } from "./style";

interface Props {
  children?: React.ReactNode;
  title?: string;
}

export const Card: React.SFC<Props> = ({ children, title }) => {
  return (
    <CardWrapper>
      <StyledCard>
        {title && <Title>{title}</Title>}
        {children}
      </StyledCard>
    </CardWrapper>
  );
};
