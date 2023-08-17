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
} from "./styled";
import { Heart } from "components/ui/Icons";
import { formatToMinAndSec } from "utils/time";

function TracksTable({ tracks }) {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeading>
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
          <tr key={track.id}>
            <TableData>
              <SongNumberText>{String(index + 1).padStart(2, "0")}</SongNumberText>
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
          </tr>
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
