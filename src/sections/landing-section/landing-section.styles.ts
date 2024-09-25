import styled from "styled-components";

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100svh;
  position: relative;
  overflow: hidden;
`;

export const LandingHeading = styled.h1`
  font-family: "PlanetOfTheApes";
  margin-top: 80px;
  font-size: 128px;
  text-align: center;
  color: #fff;
`;

export const LandingHintText = styled.span`
  font-family: "DotGothic16", sans-serif;
  margin-top: 40px;
  /* position: absolute; */
  text-align: center;
  width: 40ch;
  top: 400px;
  font-size: 25px;

  cursor: pointer;
`;

export const LandingHintText2 = styled(LandingHintText)`
  width: 30ch;
  text-align: center;
`;

export const LandingHintText3 = styled(LandingHintText)``;

export const LandingHint4 = styled.span`
  display: inline-block;
  margin-right: 30px;
  text-align: center;
`;
