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
  height: 100%;
  width: 100%;
  max-width: max-content;
  max-height: max-content;
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

export const CardWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding-top: 22px;
`;
