import { Artists, Genres, Hero } from "components/HomePage";
import { GreyTitle, TrendsAndArtistsSection, StyledAside } from "./styled";
import { SectionTitle } from "components/ui/Typography";
import TracksTable from "components/TracksTable";
import { loadChart, loadTopRadioTracks } from "services/api";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useLoadData } from "hooks/useLoadData";

function Home() {
  const [data, isLoading] = useLoadData(() => Promise.all([loadChart(), loadTopRadioTracks()]));
  const [chart, radio] = data || [];

  return (
    <main>
      <Hero tracks={radio} />
      <Genres />
      <TrendsAndArtistsSection>
        <div>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Trending right now</SectionTitle>
          <TracksTable tracks={chart?.tracks.data} isLoading={isLoading} />
        </div>
        <StyledAside>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Top Artists</SectionTitle>
          <Artists isLoading={isLoading} artists={chart?.artists?.data} />
        </StyledAside>
      </TrendsAndArtistsSection>
    </main>
  );
}

export default Home;
