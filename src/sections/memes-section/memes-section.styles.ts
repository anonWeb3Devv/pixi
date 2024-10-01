import styled from "styled-components";
import { mobileFirst } from "../../constants/breakpoints";

export const BackgroundContainer = styled.div`
  width: 100%;
  background: url("/assets/memeBg.png") repeat;
  position: relative;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  /* padding-block: 40px; */
  padding-inline: 20px;
`;

export const Title = styled.h2`
  font-family: "Handjet-Regular";
  text-align: center;
  font-size: 128px;
  text-transform: uppercase;
  margin-bottom: 100px;
  color: #000;

  a {
    text-decoration: none;
  }

  @media ${mobileFirst.sm} {
    /* font-size: 3.5rem; */
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 25%);
  gap: 20px;

  margin-bottom: -60%;

  /* max-height: 100svh; */

  > video {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 10px;
  }

  /* Mosaic Layout */
  & :nth-child(1) {
    grid-column: span 2;
    grid-row: span 2;
  }

  & :nth-child(2) {
    grid-column: span 1;
    /* grid-row: span 1; */
  }

  & :nth-child(3) {
    grid-column: span 2;
    grid-row: span 1;
  }

  & :nth-child(4) {
    grid-column: span 2;
    grid-row: span 1;
  }

  /* & :nth-child(5) {
    grid-column: span 3;
    grid-row: span 1;
  } */

  /* & :nth-child(6) {
    grid-column: span 3;
    grid-row: span 1;
  } */

  /* & :nth-child(7) {
    grid-column: span 2;
    grid-row: span 1;
  } */

  /* & :nth-child(8) {
    grid-column: span 3;
    grid-row: span 1;
  } */

  /* @media ${mobileFirst.sm} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    gap: 5px;
  } */
`;
