import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ScrollablePickerWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 30px;
  border: 2px solid #ddd;
  width: 100%;
  scrollbar-width: thin;
  background-color: ${theme.colors.secondary};
  

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.2);
    border-radius: 10px;
  }
`;

export const PreviewImage = styled.img`
  width: 155px;
  height: 155px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 10px;
  transition: transform 0.3s;
  border: 2px dashed white;

  &:hover {
    transform: scale(1.2);
    border: 2px solid #ccc;
  }
`;
