import styled from 'styled-components';

export const ScrollablePickerWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px;
  border: 2px solid #ddd;
  width: 100%;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.2);
    border-radius: 10px;
  }
`;

export const PreviewImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
    border: 2px solid #ccc;
  }
`;
