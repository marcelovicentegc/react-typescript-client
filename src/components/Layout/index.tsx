import React from "react";
import {
  LayoutWrapper,
  StyledLayout,
  Image,
  Span,
  GreetingsBox
} from "./style";
import rocketLaunch from "../../icons/rocketLaunch.png";
import {
  useLandingPageContext,
  ModalState
} from "../../contexts/LandingPageContext";
import { Card } from "../Card";

export const Layout: React.FC = () => {
  const { state } = useLandingPageContext();

  return (
    <LayoutWrapper>
      <StyledLayout>
        <GreetingsBox>
          {state.modal === ModalState.tips && <Card>Tips</Card>}
          <Span>The install worked successfully! Congratulations! </Span>
          <br />
          <Span>Now go build something great 😃!</Span>
        </GreetingsBox>
        <Image src={rocketLaunch} alt={"Rocket being launched"} />
      </StyledLayout>
    </LayoutWrapper>
  );
};
