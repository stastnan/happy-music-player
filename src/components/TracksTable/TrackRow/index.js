import PropTypes from "prop-types";
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
import { Heart, Pause, Play } from "components/ui/Icons";
import { formatToMinAndSec } from "utils/time";
import Skeleton from "react-loading-skeleton";

function TrackRow({ track, index, onClick, isPlaying }) {
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
          <TrackInfoImage src={track?.album?.cover} alt={`${track?.album.title}'s cover`} />
        ) : (
          <Skeleton width={65} height={65} borderRadius={15} />
        )}
        <TrackInfoTextWrapper>
          <TrackTitle>{track?.title || <Skeleton width={320} />}</TrackTitle>
          <TrackSubText>{track?.artist.name || <Skeleton width={250} />}</TrackSubText>
        </TrackInfoTextWrapper>
      </TrackInfo>
      <TableData>
        <TrackSubText>{formatToMinAndSec(track?.duration) || <Skeleton width={48} />}</TrackSubText>
      </TableData>
      <TableData>
        <TrackSubText>{track?.album.title || <Skeleton width={350} />}</TrackSubText>
      </TableData>
      <TableData>
        {track ? (
          <StyledIconButton width={25} height={25}>
            <Heart />
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
};

export default TrackRow;
