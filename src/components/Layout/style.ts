import { styled } from "../../utils/theme";

export const LayoutWrapper = styled.div`
  height: calc(100vh - 74px);
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.color.blue4},
    transparent
  );
  display: flex;
`;

export const StyledLayout = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 22px;
  width: 100%;

  @media only screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  height: auto;
  width: auto;
  object-fit: contain;
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 28px;
  color: ${({ theme }) => theme.color.white1};
`;

export const GreetingsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 22px;
`;
