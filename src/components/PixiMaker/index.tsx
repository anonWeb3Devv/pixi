import { useEffect, useState, useRef } from "react";
import {
  GeneratorWrapper,
  PreviewWrapper,
  CustomizationSection,
  CategoryHeading,
  Button,
} from "./styled";
import ScrollablePicker from "../ScrollablePicker";

import {
  eyeOptions,
  headOptions,
  clothesOptions,
  handOptions,
  skinOptions,
  backgroundOptions,
  mouthOptions,
} from "../ScrollablePicker/options";

const PixiMaker = () => {
  const [customization, setCustomization] = useState({
    eyes: null,
    head: null,
    mouth: null,
    pets: null,
    clothes: null,
    skin: skinOptions[1].value,
    hand: null,
    background: backgroundOptions[1].value,
  });

  const canvasRef = useRef(null);

  useEffect(() => {
    // Check if the canvas element exists before proceeding
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas is not available");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Unable to get 2D context from canvas");
      return;
    }

    const drawImage = (src) => {
      if (!src || src.includes("0.png")) return;
      console.log(`Loading image: ${src}`);
      const image = new Image();
      image.src = src;
      image.onload = () => {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      };
      image.onerror = () => {
        console.error(`Error loading image: ${src}`);
      };
    };

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawImage(customization.background);
    drawImage(customization.skin);
    drawImage(customization.eyes);
    drawImage(customization.head);
    drawImage(customization.mouth);
    drawImage(customization.clothes);
    drawImage(customization.hand);
    drawImage(customization.pets);
  }, [customization]);

  const exportImage = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "custom_character.png";
      link.click();
    } else {
      console.error("Canvas is not available for export");
    }
  };

  const handleSelect = (category, val) => {
    if (val === "../../assets/pixiAssets/eyes/0.png") {
      setCustomization({ ...customization, [category]: null });
    } else {
      setCustomization({ ...customization, [category]: val });
    }
  };

  return (
    <GeneratorWrapper>
      {/* Preview Character */}
      <PreviewWrapper>
        <canvas ref={canvasRef} width="600" height="600"></canvas>
      </PreviewWrapper>

      {/* Customization Options */}
      <CustomizationSection>
        <h3>Customize Your Character</h3>

        <CategoryHeading>Eyes</CategoryHeading>
        <ScrollablePicker
          options={eyeOptions}
          category="eyes"
          onSelect={handleSelect}
        />

        <CategoryHeading>Head</CategoryHeading>
        <ScrollablePicker
          options={headOptions}
          category="head"
          onSelect={handleSelect}
        />

        <CategoryHeading>Mouth</CategoryHeading>
        <ScrollablePicker
          options={mouthOptions}
          category="mouth"
          onSelect={handleSelect}
        />

        {/* TODO: add in pets */}

        {/* <CategoryHeading>Pets</CategoryHeading>
        <ScrollablePicker
          category="pets"
          options={petOptions}
          onSelect={handleSelect}
        /> */}

        <CategoryHeading>Clothes</CategoryHeading>
        <ScrollablePicker
          category="clothes"
          options={clothesOptions}
          onSelect={handleSelect}
        />

        <CategoryHeading>Skin</CategoryHeading>
        <ScrollablePicker
          options={skinOptions}
          category="skin"
          onSelect={handleSelect}
        />

        <CategoryHeading>Hand</CategoryHeading>
        <ScrollablePicker
          category="hand"
          options={handOptions}
          onSelect={handleSelect}
        />

        <CategoryHeading>Background</CategoryHeading>
        <ScrollablePicker
          category="background"
          options={backgroundOptions}
          onSelect={handleSelect}
        />
        <div
          style={{
            display: "flex",
            background: "green",
            gap: "10px",
            padding: "10px",
            marginTop: "20px",
          }}
        >
          <Button onClick={exportImage}>Export Image</Button>
        </div>
      </CustomizationSection>
    </GeneratorWrapper>
  );
};

export default PixiMaker;
