import styled from "styled-components";
import { mobileFirst } from "../../constants/breakpoints";

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100svh;
  /* position: relative; */
  overflow: hidden;
  padding-inline: 8px;
  max-width: 1220px;
  margin-inline: auto;
`;

export const LandingHeading = styled.h1`
  font-family: "Handjet-Light";
  margin-top: 80px;
  text-align: center;
  color: #000;
  text-transform: uppercase;
  font-size: 30px;

  @media ${mobileFirst.sm} {
    font-size: 50px;
  }
  @media ${mobileFirst.md} {
    font-size: 80px;
  }
`;

export const LandingHintText = styled.span`
  font-family: "Handjet-Light";
  margin-top: 40px;
  text-align: center;
  /* width: 50ch; */
  /* bottom: 50px; */
  /* font-size: 25px; */
  font-size: 12px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  border: #000 dotted;
  padding: 15px;
  /* margin-bottom: -50px; */

  @media ${mobileFirst.xs} {
    font-size: 15px;
  }

  @media ${mobileFirst.sm} {
    font-size: 20px;
  }
`;
