import { ButtonText, MainTitle } from "components/ui/Typography";
import { PlayButton, TextWrapper, Wrapper, HeroText } from "./styled";
import DesktopRadio from "assets/images/radio-desktop.png";
import { Play } from "components/ui/Icons";
import { PropTypes } from "prop-types";
import { useContext } from "react";
import { PlayerDispatchContext } from "context/playerContext";
import { actions } from "context/actions";

function Hero({ tracks }) {
  const dispatch = useContext(PlayerDispatchContext);

  const handlePlayClick = () => {
    dispatch({
      type: actions.SET_TRACKS_DATA,
      track: tracks[0],
      tracks,
      isPlaying: true,
    });
  };

  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>Radio</MainTitle>
        <HeroText>Pick your todays mood. We will play a perfect mix!</HeroText>
        <PlayButton onClick={handlePlayClick} disabled={!tracks || tracks.length <= 0}>
          <Play />
          <ButtonText>Play</ButtonText>
        </PlayButton>
      </TextWrapper>
      <img src={DesktopRadio} />
    </Wrapper>
  );
}

Hero.propTypes = {
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

export default Hero;
