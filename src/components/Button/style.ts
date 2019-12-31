import { styled } from "../../utils/theme";
import { ButtonType } from ".";

export const ButtonWrapper = styled.div`
  max-width: 200px;
  transition: 0.2s;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const StyledButton = styled.button<{ type?: ButtonType }>`
  position: relative;
  border-color: transparent;
  outline: none;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 18px;
  border-bottom-left-radius: 18px;
  border-top-right-radius: 16px;
  border-width: 0 0 4px;
  padding: 13px 16px;
  ${({ theme, type }) =>
    `background-color: ${
      !type || type === ButtonType.primary
        ? theme.color.green1
        : type === ButtonType.secondary
        ? theme.color.white1
        : theme.color.blue3
    }`}
  ${({ theme, type }) =>
    `color: ${
      !type || type === ButtonType.primary || type === ButtonType.tertiary
        ? theme.color.white1
        : theme.color.blue1
    }`}
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:after {
    position: absolute;
    ${({ theme, type }) =>
      `background-color: ${
        !type || type === ButtonType.primary
          ? theme.color.green2
          : type === ButtonType.secondary
          ? theme.color.white2
          : theme.color.blue2
      };`}
    border-color: transparent;
    border-width: 0 0 4px;
    border-radius: 16px;
    bottom: -8px;
    content: "";
    left: 0;
    right: 0;
    z-index: -1;
    top: 0;
  }
`;

export const Label = styled.span`
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  top: 1px;
`;
