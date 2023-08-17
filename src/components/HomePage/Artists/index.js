import { ArtistsWrapper, Wrapper, ArtistsSkeletonWrapper } from "./styled";
import { Pagination } from "swiper/modules";
import PropTypes from "prop-types";
import ArtistCard from "./ArtistCard";
import Skeleton from "react-loading-skeleton";

import { Swiper, SwiperSlide } from "swiper/react";

function Artists({ artists, isLoading }) {
  return (
    <div>
      <Wrapper>
        <ArtistsWrapper>
          {isLoading &&
            [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <Skeleton
                key={num}
                height={116}
                width={220}
                borderRadius={25}
                wrapper={ArtistsSkeletonWrapper}
              />
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
