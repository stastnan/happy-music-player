import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import { SectionSubtitle } from "components/ui/Typography";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "image",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 116px;
  border-radius: 25px;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center center;
    border-radius: 25px;
  }

  ${device.md} {
    width: 137px;
    height: 95px;
  }
`;

export const GenreName = styled(SectionSubtitle)`
  z-index: ${({ theme }) => theme.zIndex["10"]};
`;
