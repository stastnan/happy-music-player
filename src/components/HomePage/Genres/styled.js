import styled from "styled-components";

import IconButton from "components/ui/IconButton";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  margin-bottom: 35px;
  overflow: hidden;

  ${device.md} {
    gap: 20px;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  ${device.md} {
    gap: 8px;
  }
`;

export const Button = styled(IconButton)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }
`;
export const GenresWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  min-height: 116px;

  ${device.md} {
    gap: 9px;
  }
`;

export const GenresSkeletonWrapper = styled.div`
  display: flex;
`;
