import Slider from "rc-slider";
import PropTypes from "prop-types";

import { ContentWrapper } from "components/Layout";
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
  MobileTrackRow,
} from "./styled";
import IconButton from "components/ui/IconButton";
import { Pause, Play, SkipLeft, SkipRight, Volume } from "components/ui/Icons";
import { theme } from "styles/Theme";
import { useContext, useEffect, useRef, useState } from "react";
import { formatToMinAndSec } from "utils/time";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";
import { actions } from "context/actions";
import { useWindowSize } from "hooks/useWindowSize";
import { breakpoints } from "styles/BreakPoints";

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

  if (!track) {
    return null;
  }

  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;

    setPlayerState((prev) => ({ ...prev, currentTime, duration }));
  };

  const onTrackTimeDrag = (newTime) => {
    if (!audioRef?.current) return;
    audioRef.current.currentTime = newTime;
    setPlayerState((prev) => ({ ...prev, currentTime: newTime }));
  };

  const onVolumeChange = (newVolume) => {
    if (!audioRef?.current) return;
    audioRef.current.volume = newVolume;
    setPlayerState((prev) => ({ ...prev, volume: newVolume }));
  };

  const toggleVolume = () => {
    const newVolume = playerState.volume > 0 ? 0 : 0.1;
    onVolumeChange(newVolume);
  };

  return (
    <Wrapper>
      <audio
        ref={audioRef}
        src={track.preview}
        controls
        hidden
        onLoadedMetadata={onTimeUpdate}
        onTimeUpdate={onTimeUpdate}
        onEnded={handleNextSong}
      />
      <PlayerLayout
        track={track}
        handlePrevSong={handlePrevSong}
        handleNextSong={handleNextSong}
        togglePlay={togglePlay}
        isPlaying={isPlaying}
        playerState={playerState}
        onTrackTimeDrag={onTrackTimeDrag}
        toggleVolume={toggleVolume}
        onVolumeChange={onVolumeChange}
      />
    </Wrapper>
  );
}

function PlayerLayout({
  track,
  handlePrevSong,
  handleNextSong,
  togglePlay,
  isPlaying,
  playerState,
  onTrackTimeDrag,
  toggleVolume,
  onVolumeChange,
}) {
  const { width } = useWindowSize();

  if (width < breakpoints.lg) {
    return (
      <ContentWrapper display="flex" items="center" direction="column" gap={14}>
        <MobileTrackRow>
          <TrackInfoWrapper>
            <TrackImage src={track.album.cover} alt={`${track?.album?.title}'s cover`} />
            <TrackInfoTextWrapper>
              <TrackTitle>{track.title}</TrackTitle>
              <ArtistName>{track.title}</ArtistName>
            </TrackInfoTextWrapper>
          </TrackInfoWrapper>
          <IconButton onClick={togglePlay} width={55} height={55} withBackground>
            {isPlaying ? <Pause /> : <Play />}
          </IconButton>
        </MobileTrackRow>

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
          <TrackTime last={1} grey={1}>
            {formatToMinAndSec(playerState.duration)}
          </TrackTime>
        </ProgressWrapper>
      </ContentWrapper>
    );
  }
  return (
    <ContentWrapper display="flex" direction="column" gap={14}>
      <TrackInfoWrapper>
        <TrackImage src={track.album.cover} alt={`${track?.album.title}'s cover'`} />
        <TrackInfoTextWrapper>
          <TrackTitle>{track.title}</TrackTitle>
          <ArtistName>{track.title}</ArtistName>
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
        <TrackTime last={1} grey={1}>
          {formatToMinAndSec(playerState.duration)}
        </TrackTime>
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
  );
}
PlayerLayout.propTypes = {
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
      cover_big: PropTypes.string,
    }),
  }),
  handlePrevSong: PropTypes.func,
  handleNextSong: PropTypes.func,
  togglePlay: PropTypes.func,
  isPlaying: PropTypes.bool,
  playerState: PropTypes.shape({
    currentTime: PropTypes.number,
    duration: PropTypes.number,
    volume: PropTypes.number,
  }),
  onTrackTimeDrag: PropTypes.func,
  toggleVolume: PropTypes.func,
  onVolumeChange: PropTypes.func,
  toggleOpen: PropTypes.func,
  width: PropTypes.number,
};

export default Player;
