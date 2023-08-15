import { Hero } from "components/HomePage";
import styled from "styled-components";

function Home() {
  const ContentWrapper = styled.main`
    padding: 0 120px;
  `;

  return (
    <ContentWrapper>
      <Hero />
      <div>Genres</div>
      <div>Songs Table</div>
      <aside>Artists</aside>
    </ContentWrapper>
  );
}

export default Home;
