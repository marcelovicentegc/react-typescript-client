import React from "react";
import { CardWrapper, StyledCard, Title } from "./style";

interface Props {
  children?: React.ReactNode;
  withTitle?: {
    title: string;
    withFunction?: () => void;
  };
}

export const Card: React.SFC<Props> = ({ children, withTitle }) => {
  return (
    <CardWrapper>
      <StyledCard>
        {withTitle && (
          <Title
            hoverable={!!withTitle.withFunction}
            onClick={() =>
              withTitle.withFunction ? withTitle.withFunction() : null
            }
          >
            {withTitle.title}
          </Title>
        )}
        {children}
      </StyledCard>
    </CardWrapper>
  );
};
