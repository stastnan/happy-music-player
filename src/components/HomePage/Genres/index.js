import { ArrowLeft, ArrowRight } from "components/ui/Icons";
import { SectionSubtitle } from "components/ui/Typography";
import { Button, ButtonsWrapper, GenresWrapper, TitleRow, Wrapper } from "./styled";
import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import GenreCard from "./GenreCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function Genres() {
  const [genres, setGenres] = useState([]);

  const sliderRef = useRef(null);

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
      const data = await axios("/genre");
      setGenres(data.data.data.filter((genre) => genre.name.toLowerCase() !== "all"));
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
          <Swiper ref={sliderRef} slidesPerView="auto" spaceBetween={20} modules={[Pagination]}>
            {genres.map((genre) => (
              <SwiperSlide key={genre.id} style={{ width: "auto" }}>
                <GenreCard name={genre.name} backgroundImage={genre.picture_medium} />
              </SwiperSlide>
            ))}
          </Swiper>
        </GenresWrapper>
      </Wrapper>
    </div>
  );
}

export default Genres;