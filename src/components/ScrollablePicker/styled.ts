import styled from "styled-components";
import { theme } from "../../styles/theme";
import { mobileFirst } from "../../constants/breakpoints";

export const ScrollablePickerWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 12px;
  border: 2px solid #ddd;
  width: 100%;
  gap: 20px;
  scrollbar-width: thin;
  background-color: ${theme.colors.secondary};
  /* border-radius: 10px; */

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    /* border-radius: 10px; */
  }

  @media ${mobileFirst.xs} {
    gap: 40px;
    padding: 30px;
  }
`;

export const PreviewImage = styled.img`
  width: 90px;
  height: 90px;
  cursor: pointer;
  /* border-radius: 10px; */
  /* transition: transform 0.3s; */
  border: 2px dotted white;

  /* &:hover {
    transform: scale(1.2);
    border: 2px solid #ccc;
  } */

  @media ${mobileFirst.xs} {
    width: 155px;
    height: 155px;
  }
`;
