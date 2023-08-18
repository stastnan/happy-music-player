import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;

  border-radius: 0px 0px 25px 25px;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  height: 118px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 35px;
`;
