import { useEffect, useState } from "react";
import { Artists, Genres, Hero } from "components/HomePage";
import { GreyTitle, TrendsAndArtistsSection, StyledAside } from "./styled";
import { SectionTitle } from "components/ui/Typography";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { loadChart, loadTopRadioTracks } from "services/api";
import { toast } from "react-toastify";
import TracksTable from "components/TracksTable";

function Home() {
  const [chart, setChart] = useState();
  const [radio, setRadio] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const [chart, radio] = await Promise.all([loadChart(), loadTopRadioTracks()]);
        setChart(chart);
        setRadio(radio);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

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
