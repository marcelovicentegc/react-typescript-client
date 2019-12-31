import React from "react";
import {
  LayoutWrapper,
  StyledLayout,
  Image,
  Span,
  GreetingsBox
} from "./style";
import rocketLaunch from "../../icons/rocketLaunch.png";

export const Layout: React.SFC = () => {
  return (
    <LayoutWrapper>
      <StyledLayout>
        <GreetingsBox>
          <Span>The install worked successfully! Congratulations! </Span>
          <br />
          <Span>Now go build something great 😃!</Span>
        </GreetingsBox>
        <Image src={rocketLaunch} />
      </StyledLayout>
    </LayoutWrapper>
  );
};
