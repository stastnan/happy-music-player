import { SubText } from "components/ui/Typography";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  height: 105px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex["30"]};
  padding: 20px 0;
`;

export const TrackInfoWrapper = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  min-width: 400px;
`;

export const TrackInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TrackImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 15px;
`;

export const ArtistName = styled(SubText)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
`;

export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
  width: 100%;
`;

export const TrackTime = styled(SubText)`
  margin: 0 20px;
  width: 80px;
  color: ${(props) => (props.grey ? props.theme.colors.secondaryGrey : "inherit")};
`;

export const VolumeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 130px;
  gap: 22px;
  min-width: 180px;
`;
