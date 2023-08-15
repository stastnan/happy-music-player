import { ThemeProvider } from "styled-components";
import { theme } from "styles/Theme";
import { GlobalStyles } from "styles/Global";
import Home from "pages/Home";
import Header from "components/Header";
import { Play } from "components/ui/Icons";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
