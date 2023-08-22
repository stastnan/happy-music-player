import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArtistsWrapper, Wrapper, ArtistsSkeletonWrapper, ArtistLoaderWrapper } from "./styled";
import ArtistCard from "./ArtistCard";
import { useWindowSize } from "hooks/useWindowSize";
import { breakpoints } from "styles/BreakPoints";

function Artists({ artists, isLoading }) {
  const { width } = useWindowSize();
  const isMobileLayout = width < breakpoints.md;
  return (
    <div>
      <Wrapper>
        <ArtistsWrapper>
          {isLoading &&
            [...Array(8).keys()].map((num) => (
              <ArtistLoaderWrapper key={num}>
                <Skeleton
                  height={isMobileLayout ? 75 : 95}
                  width={isMobileLayout ? 75 : 95}
                  circle
                  wrapper={ArtistsSkeletonWrapper}
                  style={{ margin: "0 auto" }}
                />
                <Skeleton height={isMobileLayout ? 19 : 27} width={isMobileLayout ? 88 : 120} />
              </ArtistLoaderWrapper>
            ))}
          <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            modules={[Pagination]}
            style={{ marginLeft: 0 }}
          >
            {!isLoading &&
              artists?.map((artist) => (
                <SwiperSlide key={artist.id} style={{ width: "auto" }}>
                  <Link to={`artists/${artist.id}`}>
                    <ArtistCard name={artist.name} image={artist.picture_medium} />
                  </Link>
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
