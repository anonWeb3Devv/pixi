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
  /* max-width: 1220px; */
  margin-inline: auto;
  background-image: url("/assets/pixi-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position: 30%; */

  @media screen and (max-width: 768px) {
    background-position-x: 90%;
    background-size: cover;
  }
`;

export const LandingHeading = styled.h1`
  margin-bottom: 50px;
  font-family: "Handjet-SemiBold";
  /* margin-top: 80px; */
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
  }
  @media ${mobileFirst.md} {
    font-size: 60px;
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
