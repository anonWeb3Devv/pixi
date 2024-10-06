import styled from "styled-components";
import { mobileFirst } from "../../constants/breakpoints";

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  min-height: 100svh;
  position: relative;
  overflow: hidden;
  padding-inline: 8px;
  margin-inline: auto;
  background: url("/assets/pixi-bg.png") no-repeat center center;
  background-size: cover;

  /* Linear gradient that transitions from transparent to #B4C9FF */
  &::before {
    content: "";
    position: absolute;
    top: 0; /* Start from the top */
    left: 0;
    right: 0;
    bottom: 0; /* Extend to the bottom */
    /* background: linear-gradient(to bottom, transparent, #c2d3fc); */
    z-index: 1; /* Ensure it's above the background image */
  }

  @media screen and (max-width: 768px) {
    background-position: 85.5% 0px;
  }
`;

export const LandingHeading = styled.h1`
  margin-bottom: 100px;
  font-family: "Handjet-Regular";
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-size: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 950px;
  z-index: 100000000;
  /* border-radius: 10px; */
  border: #fff dotted;

  @media ${mobileFirst.sm} {
    font-size: 50px;
    width: 80%; // Adjust the width for small screens
  }

  @media ${mobileFirst.md} {
    font-size: 60px;
    width: 25%; // Adjust the width for medium screens
  }

  @media (max-width: 768px) {
    width: 90%; // Adjust the width for mobile screens
  }

  @media (max-width: 480px) {
    width: 75%; // Further decrease width for very small screens
  }
`;

export const LandingHintText = styled.span`
  font-family: "Handjet-Light";
  margin-bottom: 40px;
  text-align: center;
  font-size: 40px;
  cursor: pointer;
  margin-bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  /* border-radius: 10px; */
  border: #fff dotted;
  padding: 10px 15px;
  color: #fff;
  z-index: 10;

  @media ${mobileFirst.xs} {
    /* font-size: 15px; */
    font-size: 20px;
  }

  @media ${mobileFirst.sm} {
    /* font-size: 20px; */
    font-size: 70px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 40px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
