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
          <Button label={"Tips"} />
          <Button label={"Documentation"} type={ButtonType.tertiary} />
          <Button
            label={"Github"}
            type={ButtonType.secondary}
            onClick={() =>
              window.open(
                "https://github.com/marcelovicentegc/react-typescript-client",
                "_blank"
              )
            }
          />
        </RightSide>
      </StyledHeader>
    </HeaderWrapper>
  );
};
