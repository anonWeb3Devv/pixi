import styled from "styled-components";
import { mobileFirst } from "../../constants/breakpoints";

export const LorePageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center; /* Center vertically */
  height: 100dvh; /* Full viewport height */
  padding: 20px;
  position: relative;
  overflow: hidden; /* To ensure any overflow is hidden */
`;

export const LorePageTextContainer = styled.div`
  grid-column: 1 / 7;
  display: flex;
  flex-direction: column;
  margin-left: 400px;
`;

export const Heading = styled.h1`
  font-family: "Handjet-Regular";
  font-size: 128px;
  text-align: left;
  color: #000;
  text-transform: uppercase;

  @media ${mobileFirst.sm} {
    font-size: 128px;
  }
`;

export const Text = styled.p`
  font-family: "Handjet-Regular";
  font-size: 64px;
  color: #000;
  max-width: 40ch;
  margin-top: 50px;
  text-align: left;
  margin-bottom: 100px;
  cursor: pointer;

  @media ${mobileFirst.md} {
    font-size: 30px;
  }
`;

export const PixiImageMainContainer = styled.div`
  grid-column: 7 / 11;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PixiMainImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  z-index: 100000;
`;

export const PixiTopLeftImgContainer = styled.div`
  position: absolute;
  filter: blur(5px);
  height: 500px;
  width: 500px;
  top: 0;
  left: 100px;
  z-index: -1;
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
  opacity: 0.8;
  bottom: -100px;
  right: 100px;
  height: 400px;
  width: 400px;
`;

export const PixiBottomRightImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  opacity: 0.8;
  z-index: -1;
`;

export const PixiBottomLeftImgContainer = styled.div`
  position: absolute;
  filter: blur(6px);
  opacity: 0.3;
  height: 400px;
  width: 400px;
  bottom: 0;
  left: -100px;
`;

export const PixiBottomLeftImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;
