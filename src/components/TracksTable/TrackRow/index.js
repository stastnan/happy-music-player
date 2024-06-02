import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

import { Heart, Pause, Play } from "components/ui/Icons";
import { formatToMinAndSec } from "utils/time";
import { theme } from "styles/Theme";
import { breakpoints } from "styles/BreakPoints";
import {
  TableData,
  TrackInfoTextWrapper,
  TrackInfo,
  TrackInfoImage,
  TrackTitle,
  TrackSubText,
  SongNumberText,
  StyledIconButton,
  IconWrapper,
  StyledTrackRow,
} from "./styled";

function TrackRow({
  track,
  index,
  onClick,
  isPlaying,
  handleSaveTrackClick,
  isSaved,
  screenWidth,
}) {
  const isMobileLayout = screenWidth > breakpoints.md;
  return (
    <StyledTrackRow onClick={() => onClick(track)} key={track?.id}>
      <TableData>
        <SongNumberText className="text">
          {track ? String(index + 1).padStart(2, "0") : <Skeleton width={27} height={27} />}
        </SongNumberText>
        <IconWrapper className="icon">{isPlaying ? <Pause /> : <Play />}</IconWrapper>
      </TableData>

      <TrackInfo>
        {track ? (
          <TrackInfoImage src={track?.album?.cover} alt={`${track?.album?.title}'s cover`} />
        ) : (
          <Skeleton
            width={isMobileLayout ? 65 : 45}
            height={isMobileLayout ? 65 : 45}
            borderRadius={isMobileLayout ? 15 : 10}
          />
        )}
        <TrackInfoTextWrapper>
          <TrackTitle>{track?.title || <Skeleton width={isMobileLayout ? 320 : 110} />}</TrackTitle>
          <TrackSubText>
            {track?.artist?.name || <Skeleton width={isMobileLayout ? 250 : 180} />}
          </TrackSubText>
        </TrackInfoTextWrapper>
      </TrackInfo>
      {isMobileLayout && (
        <TableData>
          <TrackSubText>
            {track?.duration ? formatToMinAndSec(track?.duration) : <Skeleton width={48} />}
          </TrackSubText>
        </TableData>
      )}
      {isMobileLayout && (
        <TableData>
          <TrackSubText>{track?.album?.title || <Skeleton width={350} />}</TrackSubText>
        </TableData>
      )}
      <TableData>
        {track ? (
          <StyledIconButton
            width={25}
            height={25}
            onClick={(e) => {
              e.stopPropagation();
              handleSaveTrackClick(track.id);
            }}
          >
            <Heart fill={isSaved ? theme.colors.white : "none"} />
          </StyledIconButton>
        ) : (
          <StyledIconButton width={25} height={25}>
            <Skeleton width={25} height={25} />
          </StyledIconButton>
        )}
      </TableData>
    </StyledTrackRow>
  );
}

TrackRow.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    duration: PropTypes.number,
    preview: PropTypes.string,
    artist: PropTypes.shape({
      name: PropTypes.string,
    }),
    album: PropTypes.shape({
      title: PropTypes.string,
      cover: PropTypes.string,
    }),
  }),
  index: PropTypes.number,
  onClick: PropTypes.func,
  isPlaying: PropTypes.bool,
  handleSaveTrackClick: PropTypes.func,
  isSaved: PropTypes.bool,
  screenWidth: PropTypes.number,
};

export default TrackRow;
