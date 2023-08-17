import { ArtistsWrapper, Wrapper, ArtistsSkeletonWrapper, ArtistLoaderWrapper } from "./styled";
import { Pagination } from "swiper/modules";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import ArtistCard from "./ArtistCard";

function Artists({ artists, isLoading }) {
  return (
    <div>
      <Wrapper>
        <ArtistsWrapper>
          {isLoading &&
            [...Array(8).keys()].map((num) => (
              <ArtistLoaderWrapper key={num}>
                <Skeleton height={95} width={95} circle wrapper={ArtistsSkeletonWrapper} />
                <Skeleton height={27} />
              </ArtistLoaderWrapper>
            ))}
          <Swiper slidesPerView="auto" spaceBetween={20} modules={[Pagination]}>
            {!isLoading &&
              artists?.map((artist) => (
                <SwiperSlide key={artist.id} style={{ width: "auto" }}>
                  <ArtistCard name={artist.name} image={artist?.picture_medium} />
                </SwiperSlide>
              ))}
          </Swiper>
        </ArtistsWrapper>
      </Wrapper>
    </div>
  );
}
Artists.propTypes = {
  isLoading: PropTypes.bool,
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      picture_medium: PropTypes.string,
    }),
  ),
};

export default Artists;
