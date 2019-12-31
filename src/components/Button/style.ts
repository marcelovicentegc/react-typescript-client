import { styled } from "../../utils/theme";

export const ButtonWrapper = styled.div`
  max-width: 200px;
`;

export const StyledButton = styled.button`
  position: relative;
  border-color: transparent;
  outline: none;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 18px;
  border-bottom-left-radius: 18px;
  border-top-right-radius: 16px;
  border-width: 0 0 4px;
  padding: 13px 16px;
  background-color: #78c800;
  color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:after {
    position: absolute;
    background-color: #58a700;
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
  top: 1px;
`;
