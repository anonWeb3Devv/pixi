import {
  LorePageContainer,
  LorePageTextContainer,
  Container,
  Heading,
  PixiBottomLeftImg,
  PixiBottomLeftImgContainer,
  PixiBottomRightImg,
  PixiBottomRightImgContainer,
  PixiTopLeftImg,
  PixiTopLeftImgContainer,
  PixiTopRightImg,
  PixiTopRightImgContainer,
} from "./about-section.styles";
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
        </LorePageTextContainer>
      </Container>
      <PixiTopLeftImgContainer>
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
      </PixiBottomRightImgContainer>
    </LorePageContainer>
  );
}
