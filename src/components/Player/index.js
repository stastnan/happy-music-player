import Slider from "rc-slider";

import { ContentWrapper } from "components/Layout";
import PropTypes from "prop-types";
import {
  ArtistName,
  ControlsWrapper,
  ProgressWrapper,
  TrackImage,
  TrackInfoTextWrapper,
  TrackInfoWrapper,
  TrackTime,
  TrackTitle,
  VolumeWrapper,
  Wrapper,
} from "./styled";
import IconButton from "components/ui/IconButton";
import { Pause, Play, SkipLeft, SkipRight, Volume } from "components/ui/Icons";
import { theme } from "styles/Theme";
import { useContext, useEffect, useRef, useState } from "react";
import { formatToMinAndSec } from "utils/time";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";
import { actions } from "context/actions";

const track = {
  id: 1626811902,
  title: "Marie",
  title_short: "Marie",
  title_version: "",
  link: "https://www.deezer.com/track/1626811902",
  duration: 178,
  rank: 468011,
  explicit_lyrics: false,
  explicit_content_lyrics: 0,
  explicit_content_cover: 0,
  preview: "https://cdns-preview-9.dzcdn.net/stream/c-98285d304779ea2228b2b4beb0bbf5ab-2.mp3",
  md5_image: "f6a0e98c42338a0bebd7ec86e9e33028",
  position: 1,
  artist: {
    id: 5641952,
    name: "Roman Dragoun",
    link: "https://www.deezer.com/artist/5641952",
    picture: "https://api.deezer.com/artist/5641952/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/b10528f4b7026b1948dd274f9e192ebd/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/b10528f4b7026b1948dd274f9e192ebd/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/b10528f4b7026b1948dd274f9e192ebd/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/b10528f4b7026b1948dd274f9e192ebd/1000x1000-000000-80-0-0.jpg",
    radio: true,
    tracklist: "https://api.deezer.com/artist/5641952/top?limit=50",
    type: "artist",
  },
  album: {
    id: 288822492,
    title: "Otlučená srdce",
    cover: "https://api.deezer.com/album/288822492/image",
    cover_small:
      "https://e-cdns-images.dzcdn.net/images/cover/f6a0e98c42338a0bebd7ec86e9e33028/56x56-000000-80-0-0.jpg",
    cover_medium:
      "https://e-cdns-images.dzcdn.net/images/cover/f6a0e98c42338a0bebd7ec86e9e33028/250x250-000000-80-0-0.jpg",
    cover_big:
      "https://e-cdns-images.dzcdn.net/images/cover/f6a0e98c42338a0bebd7ec86e9e33028/500x500-000000-80-0-0.jpg",
    cover_xl:
      "https://e-cdns-images.dzcdn.net/images/cover/f6a0e98c42338a0bebd7ec86e9e33028/1000x1000-000000-80-0-0.jpg",
    md5_image: "f6a0e98c42338a0bebd7ec86e9e33028",
    tracklist: "https://api.deezer.com/album/288822492/tracks",
    type: "album",
  },
  type: "track",
};

function Player() {
  const dispatch = useContext(PlayerDispatchContext);
  const { track, isPlaying } = useContext(PlayerContext);
  const [playerState, setPlayerState] = useState({
    currentTime: 0,
    duration: 0,
    volume: 0.1,
  });
  const audioRef = useRef();

  const togglePlay = () => {
    dispatch({
      type: actions.TOGGLE_PLAY,
    });
  };

  const handleNextSong = () => {
    dispatch({
      type: actions.HANDLE_NEXT_SONG,
    });
  };

  const handlePrevSong = () => {
    dispatch({
      type: actions.HANDLE_PREV_SONG,
    });
  };

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch((err) => console.log(err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, track, audioRef]);

  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;

    setPlayerState((prev) => ({ ...prev, currentTime, duration }));
  };

  const onTrackTimeDrag = (newTime) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = newTime;
    setPlayerState((prev) => ({ ...prev, currentTime: newTime }));
  };

  const onVolumeChange = (newVolume) => {
    if (!audioRef.current) return;
    audioRef.current.volume = newVolume;
    setPlayerState((prev) => ({ ...prev, volume: newVolume }));
  };

  const toggleVolume = () => {
    const newVolume = playerState.volume > 0 ? 0 : 0.1;
    onVolumeChange(newVolume);
  };
  if (!track) return null;
  return (
    <Wrapper>
      <ContentWrapper display="flex" items="center">
        <audio
          ref={audioRef}
          src={track.preview}
          controls
          hidden
          onLoadedMetadata={onTimeUpdate}
          onTimeUpdate={onTimeUpdate}
          onEnded={handleNextSong}
        />
        <TrackInfoWrapper>
          <TrackImage src={track.album.cover} alt={`${track.album}'s cover'`} />
          <TrackInfoTextWrapper>
            <TrackTitle>{track.title}</TrackTitle>
            <ArtistName>{track.artist.name}</ArtistName>
          </TrackInfoTextWrapper>
        </TrackInfoWrapper>
        <ControlsWrapper>
          <IconButton onClick={handlePrevSong}>
            <SkipLeft />
          </IconButton>
          <IconButton onClick={togglePlay} width={55} height={55} withBackground>
            {isPlaying ? <Pause /> : <Play />}
          </IconButton>
          <IconButton onClick={handleNextSong}>
            <SkipRight />
          </IconButton>
        </ControlsWrapper>
        <ProgressWrapper>
          <TrackTime>{formatToMinAndSec(playerState.currentTime)}</TrackTime>
          <Slider
            onChange={onTrackTimeDrag}
            min={0}
            max={playerState.duration}
            step={0.2}
            value={playerState.currentTime}
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
          />
          <TrackTime grey={1}>{formatToMinAndSec(playerState.duration)}</TrackTime>
        </ProgressWrapper>
        <VolumeWrapper>
          <IconButton width={24} height={24} onClick={toggleVolume}>
            <Volume />
          </IconButton>
          <Slider
            value={playerState.volume}
            step={0.01}
            min={0}
            max={1}
            onChange={onVolumeChange}
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
          />
        </VolumeWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

// Player.propTypes = {};

export default Player;
