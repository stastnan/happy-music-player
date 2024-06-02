import { useEffect, useState, useRef, useCallback } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import GenreCard from "./GenreCard";
import { ArrowLeft, ArrowRight } from "components/ui/Icons";
import { SectionSubtitle } from "components/ui/Typography";
import { loadGenres } from "services/api";
import { useWindowSize } from "hooks/useWindowSize";
import { breakpoints } from "styles/BreakPoints";
import {
  Button,
  ButtonsWrapper,
  GenresWrapper,
  TitleRow,
  Wrapper,
  GenresSkeletonWrapper,
} from "./styled";

function Genres() {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const sliderRef = useRef(null);

  const { width } = useWindowSize();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  });

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await loadGenres();
        setGenres(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <Wrapper>
        <TitleRow>
          <SectionSubtitle>Genres</SectionSubtitle>
          <ButtonsWrapper>
            <Button withBackground width={36} height={36} onClick={handlePrev}>
              <ArrowLeft />
            </Button>
            <Button withBackground width={36} height={36} onClick={handleNext}>
              <ArrowRight />
            </Button>
          </ButtonsWrapper>
        </TitleRow>
        <GenresWrapper>
          {isLoading &&
            [...Array(8).keys()].map((num) => (
              <Skeleton
                key={num}
                height={width < breakpoints.md ? 95 : 116}
                width={width < breakpoints.md ? 137 : 220}
                borderRadius={25}
                wrapper={GenresSkeletonWrapper}
              />
            ))}
          <Swiper
            ref={sliderRef}
            slidesPerView="auto"
            spaceBetween={width < breakpoints.md ? 9 : 20}
            modules={[Pagination]}
          >
            {!isLoading &&
              genres.map((genre) => (
                <SwiperSlide key={genre.id} style={{ width: "auto" }}>
                  <Link to={`genres/${genre.id}`}>
                    <GenreCard name={genre.name} backgroundImage={genre.picture_medium} />
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </GenresWrapper>
      </Wrapper>
    </div>
  );
}

export default Genres;
