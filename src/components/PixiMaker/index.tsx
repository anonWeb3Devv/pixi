import { useEffect, useState, useRef } from "react";
import {
  GeneratorWrapper,
  Title,
  PreviewWrapper,
  CustomizationSection,
  CategoryHeading,
  StyledButton,
  StyledInput,
  LabelButton,
  ButtonContainer,
} from "./styled";
import ScrollablePicker from "../ScrollablePicker";
import ScrollablePetPicker from "../ScrollablePetPicker";
import * as omggif from "omggif";
import {
  eyeOptions,
  headOptions,
  clothesOptions,
  handOptions,
  skinOptions,
  backgroundOptions,
  mouthOptions,
  petOptions,
  pets,
} from "../ScrollablePicker/options";

import {
  resetCustomization,
  randomizeCustomization,
  handleBackgroundUpload,
  exportImage,
  handlePetSelection,
  handleSelect,
} from "./handlers";

const PixiMaker = () => {
  const defaultCustomization = {
    eyes: null,
    head: null,
    mouth: null,
    pets: null,
    clothes: null,
    skin: skinOptions[1].value,
    hand: null,
    background: backgroundOptions[1].value,
    petOptions: null,
  };

  const [customization, setCustomization] = useState(defaultCustomization);
  const [customBackground, setCustomBackground] = useState(null);
  const canvasRef = useRef(null);
  const [currentPetGif, setCurrentPetGif] = useState(null);

  const preloadImages = (frames) => {
    return frames.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
  };

  const preloadedPets = Object.keys(pets).reduce((acc, pet) => {
    acc[pet] = preloadImages(pets[pet]); // Preload each pet's frames
    return acc;
  }, {});

  // Draw static layers (background, skin, clothes, etc.)
  const drawStaticLayers = async (ctx) => {
    await Promise.all([
      loadImage(customBackground || customization.background, ctx),
      loadImage(customization.skin, ctx),
      loadImage(customization.eyes, ctx),
      loadImage(customization.head, ctx),
      loadImage(customization.mouth, ctx),
      loadImage(customization.clothes, ctx),
      loadImage(customization.hand, ctx),
    ]);
  };

  // Function to load an image
  const loadImage = (src, ctx) => {
    return new Promise((resolve, reject) => {
      if (!src || src.includes("0.png")) return resolve();
      const image = new Image();
      image.src = src;
      image.onload = () => {
        ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.height);
        resolve();
      };
      image.onerror = () => reject(`Error loading image: ${src}`);
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw static layers on every customization change
    drawStaticLayers(ctx);
  }, [customization, customBackground]);

  return (
    <GeneratorWrapper>
      <Title>Pixi Maker</Title>
      <PreviewWrapper>
        <canvas ref={canvasRef} width="600" height="600"></canvas>
        {currentPetGif && (
          <img
            src={currentPetGif}
            alt="Selected Pet"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "600px",
              height: "600px",
              pointerEvents: "none",
            }}
          />
        )}
      </PreviewWrapper>
      <ButtonContainer>
        <StyledButton
        // onClick={captureGIF}
        >
          Export Image
        </StyledButton>
        <StyledButton
          onClick={() =>
            resetCustomization(
              setCustomization,
              defaultCustomization,
              setCustomBackground,
              setCurrentPetGif
            )
          }
        >
          Reset
        </StyledButton>
        <StyledButton
          onClick={() =>
            randomizeCustomization(
              setCustomization,
              setCustomBackground,
              setCurrentPetGif
            )
          }
        >
          Random
        </StyledButton>

        <StyledInput
          type="file"
          id="background-upload"
          accept="image/png, image/jpeg"
          onChange={(e) => handleBackgroundUpload(e, setCustomBackground)}
        />
        <LabelButton htmlFor="background-upload">Upload Background</LabelButton>
      </ButtonContainer>

      {/* Customization Options */}
      <CustomizationSection>
        <CategoryHeading>Background</CategoryHeading>
        <ScrollablePicker
          category="background"
          options={backgroundOptions}
          onSelect={(val) =>
            handleSelect("background", val, customization, setCustomization)
          }
        />

        <CategoryHeading>Skin</CategoryHeading>
        <ScrollablePicker
          options={skinOptions}
          category="skin"
          onSelect={(val) =>
            handleSelect("skin", val, customization, setCustomization)
          }
        />

        <CategoryHeading>Head</CategoryHeading>
        <ScrollablePicker
          options={headOptions}
          category="head"
          onSelect={(val) =>
            handleSelect("head", val, customization, setCustomization)
          }
        />

        <CategoryHeading>Eyes</CategoryHeading>
        <ScrollablePicker
          options={eyeOptions}
          category="eyes"
          onSelect={(val) =>
            handleSelect("eyes", val, customization, setCustomization)
          }
        />

        <CategoryHeading>Clothes</CategoryHeading>
        <ScrollablePicker
          category="clothes"
          options={clothesOptions}
          onSelect={(val) =>
            handleSelect("clothes", val, customization, setCustomization)
          }
        />

        <CategoryHeading>Pets</CategoryHeading>
        <ScrollablePetPicker
          options={petOptions}
          onSelect={(val) => handlePetSelection(val, setCurrentPetGif)}
        />

        <CategoryHeading>Mouth</CategoryHeading>
        <ScrollablePicker
          options={mouthOptions}
          category="mouth"
          onSelect={(val) =>
            handleSelect("mouth", val, customization, setCustomization)
          }
        />

        <CategoryHeading>Hand</CategoryHeading>
        <ScrollablePicker
          category="hand"
          options={handOptions}
          onSelect={(val) =>
            handleSelect("hand", val, customization, setCustomization)
          }
        />
      </CustomizationSection>
    </GeneratorWrapper>
  );
};

export default PixiMaker;
