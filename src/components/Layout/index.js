import Header from "components/Header";
import Player from "components/Player";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const ContentWrapper = styled.div`
  max-width: 1920px;
  padding: 0 120px;
  width: 100%;
  margin: 0 auto;

  display: ${(props) => props.display || "block"};
  align-items: ${(props) => props.items || "flex-start"};
  justify-content: ${(props) => props.content || "flex-start"};
`;

function Layout() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Player />
    </>
  );
}

export default Layout;
