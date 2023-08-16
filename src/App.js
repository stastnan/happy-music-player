import { SkeletonTheme } from "react-loading-skeleton";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/Theme";
import { GlobalStyles } from "styles/Global";
import Home from "pages/Home";
import Header from "components/Header";

// Import skeleton loader css
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SkeletonTheme
        baseColor={theme.colors.secondaryBlack}
        highlightColor={theme.colors.lightWhite}
      >
        <Header />
        <Home />
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default App;
