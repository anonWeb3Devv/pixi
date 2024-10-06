import styled from "styled-components";
import { mobileFirst } from "../../constants/breakpoints";

export const LorePageContainer = styled.section`
  max-height: 100svh;
  position: relative;
  overflow-y: visible;
  overflow-x: clip;
  padding-bottom: 100px;
  min-width: 100svw;

  /* Set the linear gradient background */
  background: linear-gradient(to bottom, #a0b4f9, #cedcff);
`;

export const Container = styled.div`
  /* padding: 0 20px; */
  /* margin-top: 100px; */
  display: flex;
  /* flex-direction: column-reverse; */
  min-height: 100svh;
  align-items: center;
  /* gap: 142px; */
  justify-content: center;
  max-width: 1220px;
  width: 80%;
  margin-inline: auto;

  > * {
    flex: 1;
  }

  @media ${mobileFirst.sm} {
    flex-direction: row;
    padding-bottom: 0px;
  }
`;

export const LorePageTextContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  z-index: 2000;

  /* grid-column: 1 / 7; */
  /* display: flex; */
  /* flex-direction: column; */
  /* margin-left: 400px; */

  @media ${mobileFirst.sm} {
    text-align: center;
    /* margin-bottom: 50%; */
  }
`;

export const Heading = styled.h1`
  font-family: "Handjet-Regular";
  font-size: 50px;
  text-transform: uppercase;

  /* font-size: 128px; */
  /* text-align: left; */
  /* color: #000; */

  @media ${mobileFirst.md} {
    font-size: 80px;
  }
`;

export const Text = styled.p`
  font-family: "Handjet-Regular";
  font-size: 30px;

  /* color: #000; */
  /* max-width: 40ch; */
  margin-top: 50px;
  /* text-align: left; */
  /* margin-bottom: 100px; */
  /* cursor: pointer; */

  /* font-size: 64px; */
  @media ${mobileFirst.md} {
    font-size: 25px;
  }
`;

export const PixiImageMainContainer = styled.div`
  /* grid-column: 7 / 11; */
  /* height: 800px; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
`;

export const PixiMainImage = styled.img`
  /* height: 100%; */
  /* width: 100%; */
  /* border-radius: 10px; */
  /* z-index: 100000; */
`;

export const PixiTopLeftImgContainer = styled.div`
  position: absolute;
  filter: blur(5px);
  height: 300px;
  width: 300px;
  top: 100px;
  left: -50px;
  z-index: 200;
  opacity: 0.6;

  /* Animation */
  animation: moveLeftRight 4s ease-in-out infinite;

  @keyframes moveLeftRight {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(7px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 768px) {
    /* display: none; */
    height: 200px;
    width: 200px;
    top: 250px;
    left: -20px;
  }

  @media screen and (max-width: 1024px) {
  }
`;

export const PixiTopLeftImg = styled.img`
  height: 100%;
  width: 100%;
  /* border-radius: 10px; */
`;

export const PixiTopRightImgContainer = styled.div`
  position: absolute;
  filter: blur(2px);
  opacity: 0.2;
  top: 0;
  right: 20px;
  height: 400px;
  width: 400px;
  z-index: 200;

  @media screen and (max-width: 768px) {
    /* display: none; */
    height: 150px;
    width: 150px;
    top: 50px;
    right: -50px;
  }

  @media screen and (max-width: 1024px) {
  }
`;

export const PixiTopRightImg = styled.img`
  height: 100%;
  width: 100%;
  /* border-radius: 10px; */
`;

export const PixiBottomRightImgContainer = styled.div`
  position: absolute;
  filter: blur(3px);
  opacity: 0.4;
  bottom: 100px;
  right: 100px;
  height: 400px;
  width: 400px;
  z-index: 200;

  animation: moveUpDown 4s ease-in-out infinite;

  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 768px) {
    /* display: none; */
    height: 200px;
    width: 200px;
    top: 500px;
    right: -100px;
  }

  @media screen and (max-width: 1024px) {
  }
`;

export const PixiBottomRightImg = styled.img`
  /* opacity: 0.8; */
  height: 100%;
  width: 100%;
  /* border-radius: 10px; */
  /* opacity: 0.8; */
`;

export const PixiBottomLeftImgContainer = styled.div`
  position: absolute;
  filter: blur(6px);
  opacity: 0.3;
  height: 600px;
  width: 600px;
  bottom: 0;
  left: -100px;
  z-index: 200;

  @media screen and (max-width: 768px) {
    /* display: none; */
    height: 100px;
    width: 100px;
    bottom: -30px;
  }

  @media screen and (max-width: 1024px) {
    height: 250px;
    width: 250px;
  }
`;

export const PixiBottomLeftImg = styled.img`
  height: 100%;
  width: 100%;
  /* border-radius: 10px; */
`;
