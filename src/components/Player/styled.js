import { MOBILE_HEADER_HEIGHT, MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from "common/constants";
import { SubText, Text } from "components/ui/Typography";
import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  height: ${PLAYER_HEIGHT}px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex["30"]};
  padding: 20px 0;

  ${device.lg} {
    height: ${(props) =>
      props.open ? `calc(100vh - ${MOBILE_HEADER_HEIGHT}px)` : `${MOBILE_PLAYER_HEIGHT}px`};
    border-top-right-radius: ${(props) => (props.open ? 0 : "25px")};
    border-top-left-radius: ${(props) => (props.open ? 0 : "25px")};
  }
`;

export const TrackInfoWrapper = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  min-width: 400px;

  @media (max-width: 1400px) {
    min-width: 280px;
  }

  ${device.lg} {
    gap: 15px;
  }
`;

export const TrackInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 15px;

  ${device.lg} {
    gap: 2px;
  }
`;

export const TrackImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 15px;

  ${device.md} {
    height: 45px;
    width: 45px;
  }
`;

export const ArtistName = styled(SubText)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TrackTitle = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
  margin: ${(props) => (props.open ? "0 auto" : 0)};
`;

export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
  width: 100%;

  ${device.lg} {
    margin: ${(props) => (props.open ? "40px 0" : 0)};
  }
`;

export const TrackTime = styled(SubText)`
  margin: 0 20px;
  width: 80px;
  color: ${(props) => (props.grey ? props.theme.colors.secondaryGrey : "inherit")};

  ${device.lg} {
    margin: ${(props) => (props.last ? "0 0 0 20px" : 0)};
    text-align: ${(props) => (props.last ? "right" : "inherit")};
  }
`;

export const VolumeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 130px;
  gap: 22px;
  min-width: 180px;

  ${device.xl} {
    margin: ${(props) => (props.open ? "48px auto 0" : "0 0 0 60px")};
    width: ${(props) => (props.open ? "65%" : "auto")};
  }
`;
export const MobileTrackRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
