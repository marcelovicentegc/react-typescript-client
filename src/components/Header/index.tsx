import React from "react";
import {
  HeaderWrapper,
  StyledHeader,
  LeftSide,
  RightSide,
  AppTitle,
} from "./style";
import { Button, ButtonType } from "../Button";
import { useStores } from "../../stores/RootStore";
import { observer } from "mobx-react";

export const Header: React.FC = observer(() => {
  const { uiStore } = useStores();

  return (
    <HeaderWrapper data-testid="headerWrapper">
      <StyledHeader data-testid="styledHeader">
        <LeftSide data-testid="leftSide">
          <AppTitle data-testid="appTitle" />
        </LeftSide>
        <RightSide data-testid="rightSide ">
          <Button
            label={"Tips"}
            onClick={() =>
              uiStore.modal
                ? uiStore.hideTipsModal()
                : uiStore.displayTipsModal()
            }
          />
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
});
