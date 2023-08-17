import PropTypes from "prop-types";
import { Wrapper, Image, TextName } from "./styled";

function ArtistCard({ image, name }) {
  return (
    <Wrapper>
      <Image src={image} alt={`${name}'s photo`} />
      <TextName>{name}</TextName>
    </Wrapper>
  );
}

ArtistCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default ArtistCard;
