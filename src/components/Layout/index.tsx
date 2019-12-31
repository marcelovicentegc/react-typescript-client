import React from "react";
import { LayoutWrapper, StyledLayout } from "./style";
import rocketLaunch from "../../icons/rocketLaunch.png";

export const Layout: React.SFC = () => {
  return (
    <LayoutWrapper>
      <StyledLayout>
        <img src={rocketLaunch} />
      </StyledLayout>
    </LayoutWrapper>
  );
};
