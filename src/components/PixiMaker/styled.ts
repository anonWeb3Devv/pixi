import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Title = styled.h1`
  font-size: 70px;
  margin: 60px 0;
  font-family: "Handjet-Regular";
  text-transform: uppercase;
`;

export const GeneratorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

export const PreviewWrapper = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

export const CustomizationSection = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const CategoryHeading = styled.h4`
  margin: 20px auto 20px auto;
  width: 100%;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
  font-family: "Handjet-Regular";
`;

export const StyledButton = styled.button`
  background-color: ${theme.colors.secondary};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  margin: 10px 0;
  width: 100%;
  text-align: center;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
  font-family: "Handjet-Regular";

  &:hover {
    background-color: #7098ff;
  }
`;

export const StyledInput = styled.input`
  display: none;
`;

export const LabelButton = styled.label`
  background-color: ${theme.colors.secondary};
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
  text-transform: uppercase;
  font-family: "Handjet-Regular";

  &:hover {
    background-color: #7098ff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;
