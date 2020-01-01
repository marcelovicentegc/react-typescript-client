import React from "react";
import { CardWrapper, StyledCard, Title } from "./style";

interface Props {
  children?: React.ReactNode;
  title?: string;
  titleWithFunction?: () => void;
}

export const Card: React.SFC<Props> = ({
  children,
  title,
  titleWithFunction
}) => {
  return (
    <CardWrapper>
      <StyledCard>
        {title && (
          <Title
            hoverable={!!titleWithFunction}
            onClick={() => (titleWithFunction ? titleWithFunction() : null)}
          >
            {title}
          </Title>
        )}
        {children}
      </StyledCard>
    </CardWrapper>
  );
};
