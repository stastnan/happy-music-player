import { HEADER_HEIGHT } from "common/constants";
import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.header`
  display: flex;

  border-radius: 0px 0px 25px 25px;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  height: ${HEADER_HEIGHT}px;

  ${device.md} {
    align-items: center;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 35px;
  align-items: center;
`;
