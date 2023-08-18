import { SectionSubtitle } from "components/ui/Typography";
import { Logo, Search } from "components/ui/Icons";
import { LogoWrapper, Wrapper } from "./styled";
import IconButton from "components/ui/IconButton";
import { ContentWrapper } from "components/Layout";

function Header() {
  return (
    <Wrapper>
      <ContentWrapper display="flex" content="space-between" items="center">
        <LogoWrapper>
          <Logo />
          <SectionSubtitle>ZaMusic</SectionSubtitle>
        </LogoWrapper>
        <IconButton withBackground height={58} width={58}>
          <Search />
        </IconButton>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Header;
