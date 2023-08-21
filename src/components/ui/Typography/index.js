import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-size: 60px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 90px;

  ${device.md} {
    font-size: 30px;
    line-height: 45px;
  }

  ${device.md} {
    font-size: 30px;
    line-height: 45px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-size: 35px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 52px;

  ${device.md} {
    font-size: 22px;
    line-height: 33px;
  }

  ${device.md} {
    font-size: 22px;
    line-height: 33px;
  }
`;

export const SectionSubtitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-size: 25px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;

  ${device.md} {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const Text = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: normal;
`;

export const SubText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: normal;

  ${device.md} {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const ButtonText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-size: 23px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;
`;

export const SmallText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 18px;
  line-height: 22px;

  ${device.md} {
    font-size: 18px;
    line-height: 22px;
  }
`;
