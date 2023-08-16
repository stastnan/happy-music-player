import IconButton from "components/ui/IconButton";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
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
  gap: 10px;
  width: 100%;
`;
