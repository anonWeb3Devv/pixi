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
  background-color: #a0b4f9;
  background-image: 
  /* linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 80%,
      #ffffff
    ), */ url("/assets/pixi-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position-y: -20px; */

  @media screen and (max-width: 768px) {
    background-position-x: 88%;
    background-position-y: 100px;
    background-size: cover;
  }
`;

export const LandingHeading = styled.h1`
  margin-bottom: 100px;
  font-family: "Handjet-SemiBold";
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-size: 25px;
  background-color: rgba(0, 0, 0, 0.4);
  width: 950px;
  border-radius: 10px;
  border: #fff dotted;

  @media ${mobileFirst.sm} {
    font-size: 50px;
    width: 80%; // Adjust the width for small screens
  }

  @media ${mobileFirst.md} {
    font-size: 60px;
    width: 55%; // Adjust the width for medium screens
  }

  @media (max-width: 768px) {
    width: 90%; // Adjust the width for mobile screens
  }

  @media (max-width: 480px) {
    width: 75%; // Further decrease width for very small screens
  }

  @media (min-width: 1240px) {
    width: 50%;
  }
`;

export const LandingHintText = styled.span`
  font-family: "Handjet-Light";
  margin-bottom: 40px;
  text-align: center;

  font-size: 15px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  border: #fff dotted;
  padding: 10px 15px;
  color: #fff;

  @media ${mobileFirst.xs} {
    /* font-size: 15px; */
  }

  @media ${mobileFirst.sm} {
    /* font-size: 20px; */
  }
`;
