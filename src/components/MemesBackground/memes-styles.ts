import styled from "styled-components";
import { mobileFirst } from "../../constants/breakpoints";
import {
  accessory1Animation,
  accessory2Animation,
  accessory4Animation,
  accessory5Animation,
  accessory6Animation,
  accessory7Animation,
  accessory8Animation,
  accessory9Animation,
  accessory10Animation,
} from "./memes-animation";

export const LorePageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-block: 200px;
  max-width: 1200px;
  margin-inline: auto;
  min-height: 100svh;
  padding-inline: 20px;
`;

export const Heading = styled.h1`
  font-family: "Handjet-Regular";
  font-size: 64px;
  text-align: center;
  color: white;
  letter-spacing: 5px;

  @media ${mobileFirst.sm} {
    font-size: 24px;
  }
`;

export const Subheading = styled.p`
  font-family: "handjet-regular";
  font-size: 20px;
  color: #fff;
`;

export const Text = styled.p`
  font-family: "Handjet-Regular";
  font-size: 40px;
  color: #fff;
  margin-top: 50px;
  text-align: center;
  letter-spacing: 5px;

  @media ${mobileFirst.md} {
    font-size: 18px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin-top: 50px;
  gap: 20px;
`;

export const DisclaimerButton = styled.a`
  border: 1px solid #fff;
  background-color: transparent;
  font-size: 24px;
  width: 200px;
  height: 60px;
  border-radius: 10px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Handjet-Regular";
  /* cursor: url("/accessoryCursor.png"), auto; */
  cursor: pointer;
  letter-spacing: 5px;

  &:hover {
    background-color: #fff;
    border: none;
    color: #000;
  }

  @media ${mobileFirst.sm} {
    font-size: 12px;
    width: 100px;
    height: 40px;
  }
`;

export const VideoContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 400px;
  right: 400px;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  mix-blend-mode: screen;
`;

// ANIMATED accessoryS

export const Accessory1 = styled.img`
  position: absolute;
  z-index: -1;
  filter: blur(6px);
  width: 157px;
  height: 180px;
  opacity: 0.9;
  top: 20px;
  right: 120px;
  transform: rotate(220deg);
  /* animation: ${accessory9Animation} 8s ease-in-out infinite; */
  /* border: 1px solid black; */

  @media ${mobileFirst.md} {
    font-size: 40px;
    width: 100px;
    height: 140px;
    top: 30px;
    right: 600px;
  }

  @media ${mobileFirst.sm} {
    width: 120px;
    height: 120px;
    top: 10px;
    right: 200px;
    transform: rotate(10deg);
    filter: blur(3px);
  }
`;

export const Accessory2 = styled.img`
  position: absolute;
  z-index: -1;
  filter: blur(3px);
  width: 200px;
  height: 200px;
  opacity: 1;
  bottom: 300px;
  right: 220px;
  transform: rotate(-80deg);
  /* border: 1px solid red; */

  @media ${mobileFirst.md} {
    height: 320px;
    width: 320px;
    bottom: 350px;
    right: 80px;
    transform: rotate(25deg);
  }

  @media ${mobileFirst.sm} {
    bottom: 300px;
    left: -50px;
    height: 270px;
    width: 270px;
    animation: ${accessory1Animation} 11s ease-in-out infinite;
  }
`;

export const Accessory3 = styled.img`
  position: absolute;
  z-index: 0;
  /* filter: blur(1px); */
  width: 850px;
  /* height: 850px; */
  opacity: 0.98;
  top: 4%;
  right: 5%;
  animation: ${accessory4Animation} 12s ease-in-out infinite;
  filter: blur(1.5px);
  /* border: 1px solid green; */

  /* @media ${mobileFirst.md} {
    top: 80px;
    left: 20px;
    filter: blur(1.5px);
  } */

  /* @media ${mobileFirst.sm} {
    opacity: 0;
  } */
`;

export const Accessory4 = styled.img`
  position: absolute;
  z-index: -1;
  filter: blur(1.5px);
  width: 228px;
  height: 228px;
  opacity: 1;
  top: 900px;
  left: 200px;
  transform: rotate(-34deg);
  animation: ${accessory6Animation} 8s ease-in-out infinite;
  /* border: 1px solid blue; */

  @media ${mobileFirst.md} {
    filter: blur(5px);
    width: 120px;
    height: 120px;
    top: 300px;
    left: 420px;
  }

  @media ${mobileFirst.sm} {
    top: 100px;
    left: 200px;
    height: 240px;
    width: 240px;
    filter: blur(4px);
  }
`;

export const Accessory5 = styled.img`
  position: absolute;
  z-index: -1;
  filter: blur(5px);
  width: 400px;
  height: 400px;
  opacity: 0.9;
  bottom: 600px;
  left: -20px;
  transform: rotate(30deg);
  animation: ${accessory9Animation} 8s ease-in-out infinite;
  /* border: 6px soid yellow; */

  @media ${mobileFirst.md} {
    left: 140px;
    bottom: 220px;
    transform: rotate(40deg);
    height: 170px;
    width: 170px;
  }

  @media ${mobileFirst.sm} {
    height: 130px;
    width: 130px;
    bottom: 180px;
    left: 120px;
    transform: rotate(-50deg);
    filter: blur(3px);
    animation: ${accessory7Animation} 10s ease-in-out infinite;
  }
`;

export const Accessory6 = styled.img`
  position: absolute;
  z-index: -2;
  filter: blur(3.4px);
  width: 80px;
  height: 100px;
  opacity: 1;
  top: 100px;
  left: 100px;
  transform: rotate(-250deg);
  /* animation: ${accessory10Animation} 12s ease-in-out infinite; */
  /* border: 1px solid purple; */

  @media ${mobileFirst.md} {
    top: -20px;
  }

  @media ${mobileFirst.sm} {
    opacity: 0;
  }
`;

export const Accessory7 = styled.img`
  position: absolute;
  z-index: -1;
  filter: blur(1.5px);
  width: 300px;
  height: 400px;
  opacity: 1;
  bottom: 100px;
  left: 40%;
  animation: ${accessory8Animation} 6s ease-in-out infinite;
  /* border: 1px solid white; */

  @media ${mobileFirst.md} {
    overflow: hidden;
    bottom: -50px;
    width: 550px;
    height: 650px;
  }

  @media ${mobileFirst.sm} {
    left: 230px;
    bottom: -40px;
  }
`;

export const Accessory8 = styled.img`
  position: absolute;
  z-index: -1;
  filter: blur(3px);
  width: 230px;
  height: 250px;
  opacity: 0.9;
  top: 400px;
  left: 470px;
  animation: ${accessory5Animation} 9s ease-in-out infinite;
  /* border: 4px solid teal; */

  @media ${mobileFirst.md} {
    top: 200px;
    left: 700px;
    filter: blur(2px);
  }

  @media ${mobileFirst.sm} {
    opacity: 0;
  }
`;

export const Accessory9 = styled.img`
  position: absolute;
  z-index: -1;
  transform: rotate(-28.3deg);
  filter: blur(4px);
  width: 313px;
  height: 313px;
  opacity: 0.95;
  bottom: 1200px;
  right: 10px;
  animation: ${accessory2Animation} 8s ease-in-out infinite;
  /* border: 4px solid orange; */

  @media ${mobileFirst.md} {
    opacity: 0;
  }

  @media ${mobileFirst.sm} {
    opacity: 0;
  }
`;

export const Accessory10 = styled.img`
  position: absolute;
  z-index: -1;
  filter: blur(2px);
  width: 400px;
  height: 414px;
  opacity: 1;
  top: 1600px;
  right: 100px;
  transform: rotate(70deg);
  animation: ${accessory6Animation} 12s ease-in-out infinite;
  /* border: 5px solid red; */

  @media ${mobileFirst.md} {
    top: -20px;
  }

  @media ${mobileFirst.sm} {
    opacity: 0;
  }
`;

// MORE accessoryS

export const Accessory11 = styled.img`
  position: absolute;
  z-index: -2;
  filter: blur(2.85px);
  width: 150px;
  height: 174px;
  opacity: 1;
  bottom: 3000px;
  left: 800px;
  transform: rotate(70deg);
  animation: ${accessory1Animation} 12s ease-in-out infinite;
  /* border: 5px solid black; */

  @media ${mobileFirst.md} {
    top: -20px;
  }

  @media ${mobileFirst.sm} {
    opacity: 0;
  }
`;

export const Accessory12 = styled.img`
  position: absolute;
  z-index: -2;
  filter: blur(2.85px);
  width: 150px;
  height: 174px;
  opacity: 1;
  bottom: 2000px;
  left: 50px;
  transform: rotate(70deg);
  animation: ${accessory7Animation} 12s ease-in-out infinite;
  /* border: 5px solid white; */

  @media ${mobileFirst.md} {
    top: -20px;
  }

  @media ${mobileFirst.sm} {
    opacity: 0;
  }
`;

export const Accessory13 = styled.img`
  position: absolute;
  z-index: -2;
  filter: blur(3.5px);
  width: 300px;
  height: 330px;
  opacity: 1;
  top: 200px;
  left: 100px;
  transform: rotate(70deg);
  animation: ${accessory2Animation} 12s ease-in-out infinite;
  /* border: 5px solid blue; */

  @media ${mobileFirst.md} {
    top: -20px;
  }

  @media ${mobileFirst.sm} {
    opacity: 0;
  }
`;

export const Accessory14 = styled.img`
  position: absolute;
  z-index: -2;
  filter: blur(2.85px);
  width: 150px;
  height: 174px;
  opacity: 1;
  top: 1600px;
  left: -50px;
  transform: rotate(70deg);
  animation: ${accessory1Animation} 12s ease-in-out infinite;

  @media ${mobileFirst.md} {
    top: -20px;
  }

  @media ${mobileFirst.sm} {
    opacity: 0;
  }
`;
