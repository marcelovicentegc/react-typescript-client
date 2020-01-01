import React from "react";
import {
  LayoutWrapper,
  StyledLayout,
  Image,
  Span,
  GreetingsBox,
  CardWrapper
} from "./style";
import rocketLaunch from "../../icons/rocketLaunch.png";
import {
  useLandingPageContext,
  ModalState
} from "../../contexts/LandingPageContext";
import { Card } from "../Card";
import { List } from "../List";

export const Layout: React.FC = () => {
  const { state, hideTipsModal } = useLandingPageContext();

  return (
    <LayoutWrapper>
      <StyledLayout>
        <GreetingsBox>
          {state.modal === ModalState.tips && (
            <CardWrapper onClick={() => hideTipsModal()}>
              <Card title={"🚀 Tips for a better web app"}>
                <List items={state.tips} />
              </Card>
            </CardWrapper>
          )}
          <Span>The install worked successfully! Congratulations! </Span>
          <br />
          <Span>Now go build something great 😃!</Span>
        </GreetingsBox>
        <Image src={rocketLaunch} alt={"Rocket being launched"} />
      </StyledLayout>
    </LayoutWrapper>
  );
};
