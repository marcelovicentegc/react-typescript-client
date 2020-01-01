import React from "react";
import { LayoutWrapper, StyledLayout } from "./style";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.SFC<Props> = ({ children }) => {
  return (
    <LayoutWrapper>
      <StyledLayout>{children}</StyledLayout>
    </LayoutWrapper>
  );
};
