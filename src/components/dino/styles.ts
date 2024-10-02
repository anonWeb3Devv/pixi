import styled from "styled-components";
import { mobileFirst } from "../../constants/breakpoints";

export const Heading = styled.h2`
  font-family: "Handjet-regular";
  align-self: center;
  font-size: 50px;

  @media ${mobileFirst.sm} {
    font-size: 80px;
  }
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 100;
`;

export const Text = styled.p`
  font-family: "Handjet-Regular";
  font-size: 20px;
  color: white;
  text-align: center;
`;

export const Points = styled.p`
  font-family: "Handjet-Regular";
  font-size: 20px;
  color: black;
  text-align: center;
  position: absolute;
  top: 20px;
  right: 30px;

  /* z-index: 101; */
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  gap: 10px;
`;
