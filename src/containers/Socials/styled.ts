// SocialsStyles.js
import styled from "styled-components";

interface BoxProps {
  questionMark: boolean;
}

export const MainWrapper = styled.main`
  width: 80%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  text-transform: uppercase;
  margin: 20px 0;
  font-family: "Handjet-Regular";
  margin-top: 100px;
`;

export const Subtitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: #777;
  margin: 0 0 30px 0;
  font-family: "Handjet-Light";
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 1fr;
  margin: 20px;
  position: relative;

  // Position the boxes
  & > :nth-child(1) {
    grid-column: 5;
    grid-row: 1; /* Top row, top right */
  }

  & > :nth-child(2) {
    grid-column: 2;
    grid-row: 2; /* Middle row, above 2nd box */
  }

  & > :nth-child(3) {
    grid-column: 3;
    grid-row: 2; /* Middle row, above 3rd box */
  }

  & > :nth-child(4) {
    grid-column: 5;
    grid-row: 2; /* Middle row, above 5th box */
  }

  & > :nth-child(5) {
    grid-column: 1;
    grid-row: 3; /* Bottom row, 1st box */
  }

  & > :nth-child(6) {
    grid-column: 2;
    grid-row: 3; /* Bottom row, 2nd box */
  }

  & > :nth-child(7) {
    grid-column: 3;
    grid-row: 3; /* Bottom row, 3rd box */
  }

  & > :nth-child(8) {
    grid-column: 4;
    grid-row: 3; /* Bottom row, 4th box */
  }

  & > :nth-child(9) {
    grid-column: 5;
    grid-row: 3; /* Bottom row, 5th box */
  }
`;

export const Box = styled.div<BoxProps>`
  background-color: #624713;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  font-size: 24px;
  width: 100%;
  height: 0;
  padding-top: 100%;
  border: 1px solid black;
  position: relative;
`;

export const QuestionMark = styled.div`
  font-size: 48px;
  color: #fff;
  cursor: pointer;
  background-image: url("/unknownBlock.png");
`;

export const InnerBox = styled.div`
  background-color: #67532d;
  border-radius: 15px;
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%;

  a {
    color: white;
    text-decoration: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 1s;
    opacity: 0;
    cursor: pointer;
  }

  ${Box}:hover & {
    a {
      opacity: 1;
    }
    ${QuestionMark} {
      opacity: 0;
      transition: opacity 1s;
    }
  }
`;
