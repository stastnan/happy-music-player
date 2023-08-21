import styled from "styled-components";
import { Text } from "components/ui/Typography";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 14px;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 95px;
  width: 95px;
  border-radius: 50%;

  ${device.md} {
    height: 75px;
    width: 75px;
  }
`;

export const ArtistName = styled(Text)`
  text-align: center;
  max-width: 140px;

  ${device.md} {
    width: 75px;
    font-size: 16px;
    line-height: 19px;
  }
`;
