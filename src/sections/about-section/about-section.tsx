import {
  // Text,
  LorePageContainer,
  LorePageTextContainer,
  PixiMainImage,
  PixiImageMainContainer,
  PixiTopLeftImgContainer,
  PixiTopLeftImg,
  PixiTopRightImgContainer,
  PixiTopRightImg,
  PixiBottomLeftImgContainer,
  PixiBottomLeftImg,
  PixiBottomRightImgContainer,
  PixiBottomRightImg,
  Container,
  Heading,
} from "./about-section.styles";
import pixiMain from "/assets/pixiMain.png";
import pixiTopRight from "/assets/pixiZen.png";
import pixiBottomRight from "/assets/pixiRich.jpeg";
import pixiTopLeft from "/assets/pixiBath.png";
import pixiBottomLeft from "/assets/pixiWave.jpeg";

export function AboutSection() {
  return (
    <LorePageContainer id="about">
      <Container>
        <LorePageTextContainer>
          <Heading>the pixelated cat of solana</Heading>
          {/* <Text>The pixelated cat of solana.</Text> */}
        </LorePageTextContainer>
        {/* 
        <PixiImageMainContainer>
          <PixiMainImage src={pixiMain} />
        </PixiImageMainContainer> */}
      </Container>

      {/* Image Containers */}
      {/* <PixiTopLeftImgContainer>
        <PixiTopLeftImg src={pixiTopLeft} />
      </PixiTopLeftImgContainer>
      <PixiTopRightImgContainer>
        <PixiTopRightImg src={pixiTopRight} />
      </PixiTopRightImgContainer>
      <PixiBottomLeftImgContainer>
        <PixiBottomLeftImg src={pixiBottomLeft} />
      </PixiBottomLeftImgContainer>
      <PixiBottomRightImgContainer>
        <PixiBottomRightImg src={pixiBottomRight} />
      </PixiBottomRightImgContainer> */}
    </LorePageContainer>
  );
}
