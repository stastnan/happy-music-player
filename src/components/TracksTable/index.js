import { SubText } from "components/ui/Typography";
import PropTypes from "prop-types";
import {
  Table,
  TableHead,
  TableHeading,
  TableData,
  TrackInfoTextWrapper,
  TrackInfo,
  TrackInfoImage,
  TrackTitle,
  TrackSubText,
  SongNumberText,
  StyledIconButton,
  TableHeadingTime,
  Line,
  TrackRow,
  IconWrapper,
} from "./styled";
import { Heart, Play } from "components/ui/Icons";
import { formatToMinAndSec } from "utils/time";

function TracksTable({ tracks }) {
  return (
    <Table cellSpacing={0}>
      <TableHead>
        <tr>
          <TableHeading first>
            <SubText>#</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Song Name</SubText>
          </TableHeading>
          <TableHeadingTime>
            <SubText>Time</SubText>
          </TableHeadingTime>
          <TableHeading>
            <SubText>Album Name</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Actions</SubText>
          </TableHeading>
        </tr>
      </TableHead>
      <Line colSpan={5} />
      <tbody>
        {tracks?.map((track, index) => (
          <TrackRow key={track.id}>
            <TableData>
              <SongNumberText className="text">{String(index + 1).padStart(2, "0")}</SongNumberText>
              <IconWrapper className="icon">
                <Play />
              </IconWrapper>
            </TableData>
            <TrackInfo>
              <TrackInfoImage src={track.album.cover} alt={`${track.album.name}'s cover`} />

              <TrackInfoTextWrapper>
                <TrackTitle>{track.title}</TrackTitle>
                <TrackSubText>{track.artist.name}</TrackSubText>
              </TrackInfoTextWrapper>
            </TrackInfo>
            <TableData>
              <TrackSubText>{formatToMinAndSec(track.duration)}</TrackSubText>
            </TableData>
            <TableData>
              <TrackSubText>{track.album.title}</TrackSubText>
            </TableData>
            <TableData>
              <StyledIconButton width={25} height={25}>
                <Heart />
              </StyledIconButton>
            </TableData>
          </TrackRow>
        ))}
      </tbody>
    </Table>
  );
}

TracksTable.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
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
  ),
};

export default TracksTable;
