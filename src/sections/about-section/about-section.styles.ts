import styled from "styled-components";
import { mobileFirst } from "../../constants/breakpoints";

export const LorePageContainer = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 30px;
  justify-content: center;
  max-width: 1220px;
  margin-inline: auto;
  /* display: grid; */
  /* grid-template-columns: repeat(12, 1fr); */
  /* align-items: center; */
  min-height: 100svh;

  position: relative;
  overflow: hidden;
  padding-bottom: 100px;

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

  /* grid-column: 1 / 7; */
  /* display: flex; */
  /* flex-direction: column; */
  /* margin-left: 400px; */

  @media ${mobileFirst.sm} {
    text-align: left;
  }
`;

export const Heading = styled.h1`
  font-family: "Handjet-Regular";
  font-size: 40px;
  text-transform: uppercase;

  /* font-size: 128px; */
  /* text-align: left; */
  /* color: #000; */

  @media ${mobileFirst.md} {
    font-size: 60px;
  }
`;

export const Text = styled.p`
  font-family: "Handjet-Regular";
  font-size: 25px;

  /* color: #000; */
  /* max-width: 40ch; */
  margin-top: 50px;
  /* text-align: left; */
  /* margin-bottom: 100px; */
  /* cursor: pointer; */

  /* font-size: 64px; */
  @media ${mobileFirst.md} {
    font-size: 35px;
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
  height: 500px;
  width: 500px;
  top: 0;
  left: 100px;
  z-index: -1;
  opacity: 0.6;
`;

export const PixiTopLeftImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const PixiTopRightImgContainer = styled.div`
  position: absolute;
  filter: blur(2px);
  opacity: 0.4;
  top: 0;
  right: 20px;
  height: 500px;
  width: 500px;
  z-index: -1;
`;

export const PixiTopRightImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const PixiBottomRightImgContainer = styled.div`
  position: absolute;
  filter: blur(3px);
  opacity: 0.4;
  bottom: -100px;
  right: 100px;
  height: 400px;
  width: 400px;
  z-index: -1;
`;

export const PixiBottomRightImg = styled.img`
  /* opacity: 0.8; */
  height: 100%;
  width: 100%;
  border-radius: 10px;
  /* opacity: 0.8; */
`;

export const PixiBottomLeftImgContainer = styled.div`
  position: absolute;
  filter: blur(6px);
  opacity: 0.3;
  height: 400px;
  width: 400px;
  bottom: 0;
  left: -100px;
  z-index: -1;
`;

export const PixiBottomLeftImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;
