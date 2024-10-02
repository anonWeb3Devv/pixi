import {
  Text,
  Heading,
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
} from "./about-section.styles";
import pixiMain from "/assets/pixiMain.png";
import pixiTopRight from "/assets/pixiZen.png";
import pixiBottomRight from "/assets/pixiRich.jpeg";
import pixiTopLeft from "/assets/pixiBath.png";
import pixiBottomLeft from "/assets/pixiWave.jpeg";

export function AboutSection() {
  return (
    <LorePageContainer id="about">
      <LorePageTextContainer>
        <Heading>the pixiverse</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum in
          doloribus vero, atque placeat recusandae optio exercitationem alias
          illo autem, quam beatae. Beatae, deleniti error. Repellendus labore
          quis veniam iusto.
        </Text>
      </LorePageTextContainer>

      <PixiImageMainContainer>
        <PixiMainImage src={pixiMain} />
      </PixiImageMainContainer>

      {/* Image Containers */}
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
      {/*
       */}
    </LorePageContainer>
  );
}
