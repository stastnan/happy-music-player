import { Genres, Hero } from "components/HomePage";
import styled from "styled-components";
import { ContentWrapper, TrendsAndArtistsSection } from "./styled";

function Home() {
  return (
    <ContentWrapper>
      <Hero />
      <Genres />
      <TrendsAndArtistsSection>
        <div>Songs Table</div>
        <aside>Artists</aside>
      </TrendsAndArtistsSection>
    </ContentWrapper>
  );
}

export default Home;
