import { ThemeProvider } from "styled-components";
import { theme } from "styles/Theme";
import { GlobalStyles } from "styles/Global";

import {
  ButtonText,
  MainTitle,
  SectionSubtitle,
  SectionTitle,
  SubText,
  Text,
} from "./components/ui/Typography";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Music,
  Pause,
  Play,
  Search,
  SkipLeft,
  SkipRight,
  Volume,
} from "components/ui/icons";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainTitle>Hello</MainTitle>
      <SectionTitle>Hello</SectionTitle>
      <SectionSubtitle>Hello</SectionSubtitle>
      <Text>Hello</Text>
      <SubText>Hello</SubText>
      <ButtonText>Hello</ButtonText>
      <br />
      <Play /> <br />
      <ArrowLeft /> <br />
      <ArrowRight /> <br />
      <Heart /> <br />
      <Music /> <br />
      <Pause /> <br />
      <Search />
      <br />
      <SkipLeft />
      <br />
      <SkipRight />
      <br />
      <Volume />
      <br />
    </ThemeProvider>
  );
}

export default App;
