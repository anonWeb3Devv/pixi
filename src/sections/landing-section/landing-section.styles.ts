import styled from "styled-components";

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  position: relative;
  overflow: hidden;
  background: lightblue;
`;

export const LandingHeading = styled.h1`
  font-family: "Handjet-Light";
  margin-top: 80px;
  font-size: 80px;
  text-align: center;
  color: #000;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const LandingHintText = styled.span`
  font-family: "Handjet-Light";
  margin-top: 40px;
  text-align: center;
  width: 50ch;
  bottom: 50px;
  font-size: 25px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  border: #000 dotted;
  margin-bottom: -50px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
