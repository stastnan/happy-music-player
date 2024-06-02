import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export const StyledInput = styled.input.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "icon",
})`
  width: 100%;
  background: ${({ theme }) => theme.colors.lightWhite};
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  line-height: 27px;
  border-radius: 25px;
  padding: 17px 54px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  background-image: ${(props) => `url(${props.icon})`};
  background-repeat: no-repeat;
  background-position: 17px 21px;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.white};
    outline: none;
  }
`;
