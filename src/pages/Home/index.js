import { useEffect, useState } from "react";
import axios from "axios";
import { Artists, Genres, Hero } from "components/HomePage";
import { ContentWrapper, GreyTitle, TrendsAndArtistsSection, StyledAside } from "./styled";
import { SectionTitle } from "components/ui/Typography";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Home() {
  const [chart, setChart] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await axios("/chart");
      setChart(data.data);
      setIsLoading(false);
    };
    loadData();
  }, []);

  return (
    <ContentWrapper>
      <Hero />
      <Genres />
      <TrendsAndArtistsSection>
        <div>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Trending right now</SectionTitle>
          <div>Songs Table</div>
        </div>
        <StyledAside>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Top Artists</SectionTitle>
          <Artists isLoading={isLoading} artists={chart?.artists.data} />
        </StyledAside>
      </TrendsAndArtistsSection>
    </ContentWrapper>
  );
}

export default Home;
