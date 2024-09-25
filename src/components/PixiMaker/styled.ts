import styled from 'styled-components';


export const GeneratorWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const PreviewWrapper = styled.div`
  margin-bottom: 20px;
`;

export const CustomizationSection = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
`;

export const CategoryHeading = styled.h4`
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const StyledButton = styled.button`
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  margin: 10px 0;
  width: 100%;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;


export const StyledInput = styled.input`
  display: none;
`;

export const LabelButton = styled.label`
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  margin: 10px 0;
  width: 100%;
  text-align: center;
  display: block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;