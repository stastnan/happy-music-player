import IconButton from "components/ui/IconButton";
import { SubText, Text } from "components/ui/Typography";
import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const TableData = styled.td`
  padding: 10px 20px 10px 0;
`;

export const TrackInfo = styled(TableData)`
  display: flex;
  gap: 25px;
  align-items: center;

  ${device.md} {
    gap: 10px;
  }
`;

export const TrackInfoTextWrapper = styled.div`
  padding: 10px 20px 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${device.md} {
    gap: 2px;
  }
`;

export const TrackInfoImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 15px;

  ${device.md} {
    height: 45px;
    width: 45px;
    border-radius: 10px;
  }
`;

export const TrackTitle = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${device.md} {
    font-size: 18px;
    line-height: 22px;
  }
`;
export const TrackSubText = styled(SubText)`
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${device.md} {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const SongNumberText = styled(SubText)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const StyledIconButton = styled(IconButton)`
  margin: 0 auto;
`;

export const StyledTrackRow = styled.tr`
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightWhite};

    .text {
      display: none;
    }

    .icon {
      display: block;
    }
  }

  td:first-child {
    padding-left: 15px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const IconWrapper = styled.div`
  display: none;
  width: 20px;
  height: 20px;
`;
