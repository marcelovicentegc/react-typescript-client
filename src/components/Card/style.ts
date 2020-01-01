import { styled } from "../../utils/theme";

export const CardWrapper = styled.div``;

export const StyledCard = styled.div`
  display: flex;
  ${({ theme }) => `background: ${theme.color.white1};
  border: 2px solid ${theme.color.grey1};`};
  border-radius: 16px;
  display: block;
  margin: 0 24px 24px;
  padding: 24px;
`;

export const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 22px 0px;
  font-weight: bold;
  text-transform: uppercase;
`;
