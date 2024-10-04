import styled from "styled-components";
import { theme } from "../../styles/theme";
import { mobileFirst } from "../../constants/breakpoints";

export const Title = styled.h1`
  font-size: 80px;
  margin: 30px 0 20px 0;
  line-height: 70px;
  margin: 120px 0 55px 0;

  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

export const GeneratorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 60px auto 0 auto;
  padding-bottom: 20px;
  font-family: "Handjet-Regular", sans-serif;

  @media ${mobileFirst.xs} {
    margin: 0 auto;
  }
`;

export const PreviewWrapper = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

export const CustomizationSection = styled.div`
  width: 100%;
  font-family: "Handjet-Regular", sans-serif;

  @media ${mobileFirst.xs} {
    padding: 20px 0;
  }
`;

export const CategoryHeading = styled.h4`
  margin: 10px auto 10px auto;
  width: 100%;
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;

  @media ${mobileFirst.xs} {
    font-size: 20px;
    margin: 20px auto 20px auto;
  }
`;

export const StyledButton = styled.button`
  background-color: ${theme.colors.secondary};
  border: none;
  border-radius: 5px;
  font-size: 10px;
  padding: 6px 12px;
  color: #333;
  cursor: pointer;
  margin: 10px 0;
  width: 100%;
  text-align: center;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
  font-family: "Handjet-Regular";
  line-height: 100%;
  &:hover {
    background-color: #7098ff;
  }

  @media ${mobileFirst.xs} {
    padding: 12px 20px;
    font-size: 16px;
  }
`;

export const StyledInput = styled.input`
  display: none;
`;

export const LabelButton = styled.label`
  background-color: ${theme.colors.secondary};
  border-radius: 5px;
  font-size: 10px;
  padding: 6px 12px;
  color: #333;
  cursor: pointer;
  margin: 10px 0;
  width: 100%;
  text-align: center;
  display: block;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
  font-family: "Handjet-Regular";
  line-height: 100%;

  &:hover {
    background-color: #7098ff;
  }

  @media ${mobileFirst.xs} {
    padding: 12px 20px;
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;

  @media ${mobileFirst.xs} {
    gap: 20px;
  }
`;
