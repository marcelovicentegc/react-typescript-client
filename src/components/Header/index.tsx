import React from "react";
import {
  HeaderWrapper,
  StyledHeader,
  LeftSide,
  RightSide,
  AppTitle
} from "./style";
import { Button, ButtonType } from "../Button";

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <LeftSide>
          <AppTitle />
        </LeftSide>
        <RightSide>
          <Button label={"Get started"} />
          <Button label={"Github"} type={ButtonType.secondary} />
        </RightSide>
      </StyledHeader>
    </HeaderWrapper>
  );
};
