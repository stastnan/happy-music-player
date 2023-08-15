import { ReactComponent as PlayIcon } from "assets/icons/play.svg";
import { ReactComponent as PauseIcon } from "assets/icons/pause.svg";
import { ReactComponent as MusicIcon } from "assets/icons/music.svg";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import { ReactComponent as ArrowLeftIcon } from "assets/icons/arrowLeft.svg";
import { ReactComponent as SkipLeftIcon } from "assets/icons/skipLeft.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as VolumeIcon } from "assets/icons/volume.svg";

import { styled } from "styled-components";

export const Play = styled(PlayIcon)`
  fill: ${(props) => props.color || "white"};
  stroke: ${(props) => props.color || "white"};
`;

export const Pause = styled(PauseIcon)`
  fill: ${(props) => props.color || "white"};
  stroke: ${(props) => props.color || "white"};
`;

export const Music = styled(MusicIcon)`
  stroke: ${(props) => props.color || "white"};
`;

export const Heart = styled(HeartIcon)`
  stroke: ${(props) => props.color || "white"};
`;

export const ArrowLeft = styled(ArrowLeftIcon)`
  stroke: ${(props) => props.color || "white"};
`;

export const ArrowRight = styled(ArrowLeft)`
  transform: rotate(180deg);
`;

export const SkipLeft = styled(SkipLeftIcon)`
  fill: ${(props) => props.color || "white"};
`;

export const SkipRight = styled(SkipLeft)`
  transform: rotate(180deg);
`;

export const Search = styled(SearchIcon)`
  fill: ${(props) => props.color || "white"};
`;

export const Volume = styled(VolumeIcon)`
  stroke: ${(props) => props.color || "white"};
`;
