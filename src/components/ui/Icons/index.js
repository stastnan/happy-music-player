import styled from "styled-components";
import { ReactComponent as PlayIcon } from "assets/icons/play.svg";
import { ReactComponent as PauseIcon } from "assets/icons/pause.svg";
import { ReactComponent as MusicIcon } from "assets/icons/music.svg";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import { ReactComponent as ArrowLeftIcon } from "assets/icons/arrowLeft.svg";
import { ReactComponent as SkipLeftIcon } from "assets/icons/skipLeft.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as VolumeIcon } from "assets/icons/volume.svg";
import { ReactComponent as Logo } from "assets/icons/logo.svg";

const Play = styled(PlayIcon)`
  fill: ${(props) => props.color || "white"};
  stroke: ${(props) => props.color || "white"};
`;

const Pause = styled(PauseIcon)`
  fill: ${(props) => props.color || "white"};
  stroke: ${(props) => props.color || "white"};
`;

const Music = styled(MusicIcon)`
  stroke: ${(props) => props.color || "white"};
`;

const Heart = styled(HeartIcon)`
  stroke: ${(props) => props.color || "white"};
`;

const ArrowLeft = styled(ArrowLeftIcon)`
  stroke: ${(props) => props.color || "white"};
`;

const ArrowRight = styled(ArrowLeft)`
  transform: rotate(180deg);
`;

const SkipLeft = styled(SkipLeftIcon)`
  fill: ${(props) => props.color || "white"};
`;

const SkipRight = styled(SkipLeft)`
  transform: rotate(180deg);
`;

const Search = styled(SearchIcon)`
  fill: ${(props) => props.color || "white"};
`;

const Volume = styled(VolumeIcon)`
  stroke: ${(props) => props.color || "white"};
`;

export {
  Play,
  ArrowLeft,
  ArrowRight,
  Heart,
  Music,
  Pause,
  Search,
  SkipLeft,
  SkipRight,
  Volume,
  Logo,
};
