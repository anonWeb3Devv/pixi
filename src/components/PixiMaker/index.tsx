import { useEffect, useState, useRef } from "react";
import {
  GeneratorWrapper,
  PreviewWrapper,
  CustomizationSection,
  CategoryHeading,
  StyledButton,
  StyledInput,
  LabelButton,
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
  const defaultCustomization = {
    eyes: null,
    head: null,
    mouth: null,
    pets: null,
    clothes: null,
    skin: skinOptions[1].value,
    hand: null,
    background: backgroundOptions[1].value,
  };

  const [customization, setCustomization] = useState(defaultCustomization);
  const [customBackground, setCustomBackground] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
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

    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        if (!src || src.includes("0.png")) return resolve();
        const image = new Image();
        image.src = src;
        image.onload = () => {
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          resolve();
        };
        image.onerror = () => {
          console.error(`Error loading image: ${src}`);
          reject();
        };
      });
    };

    const drawAllImages = async () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Wait for all images to load and draw
      await Promise.all([
        loadImage(customBackground || customization.background),
        loadImage(customization.skin), // Ensure skin is loaded
        loadImage(customization.eyes),
        loadImage(customization.head),
        loadImage(customization.mouth),
        loadImage(customization.clothes),
        loadImage(customization.hand),
        loadImage(customization.pets),
      ]);
    };

    drawAllImages();
  }, [customization, customBackground]); // Trigger on customization and customBackground changes

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

  const reset = () => {
    setCustomization(defaultCustomization);
    setCustomBackground(null); // Reset custom background as well
  };

  // Choose random options for each category
  const randomize = () => {
    const randomOption = (options) =>
      options[Math.floor(Math.random() * options.length)].value;

    setCustomization({
      eyes: randomOption(eyeOptions),
      head: randomOption(headOptions),
      mouth: randomOption(mouthOptions),
      pets: null, // Assuming no pets option in current context
      clothes: randomOption(clothesOptions),
      skin: randomOption(skinOptions),
      hand: randomOption(handOptions),
      background: randomOption(backgroundOptions),
    });
    setCustomBackground(null); // Remove custom background in random mode
  };

  const handleBackgroundUpload = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          const size = Math.min(img.width, img.height); // Crop to square
          canvas.width = 600; // Your canvas width (same as the generator canvas)
          canvas.height = 600; // Your canvas height

          // Draw the image onto the temporary canvas, cropped
          ctx.drawImage(
            img,
            (img.width - size) / 2,
            (img.height - size) / 2,
            size,
            size,
            0,
            0,
            canvas.width,
            canvas.height
          );

          // Set the custom background and immediately trigger a re-render of the entire canvas
          setCustomBackground(canvas.toDataURL("image/png"));

          // Immediately redraw the entire canvas, including the new background and the character
          const mainCanvas = canvasRef.current;
          const mainCtx = mainCanvas.getContext("2d");

          // Clear and redraw
          mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
          const drawImage = (src) => {
            if (!src || src.includes("0.png")) return;
            const image = new Image();
            image.src = src;
            image.onload = () =>
              mainCtx.drawImage(
                image,
                0,
                0,
                mainCanvas.width,
                mainCanvas.height
              );
          };

          // Redraw the entire canvas with the new background and character layers
          drawImage(canvas.toDataURL("image/png")); // Use the custom background
          drawImage(customization.skin);
          drawImage(customization.eyes);
          drawImage(customization.head);
          drawImage(customization.mouth);
          drawImage(customization.clothes);
          drawImage(customization.hand);
          drawImage(customization.pets);
        };
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a PNG or JPG image.");
    }
  };

  const handleSelect = (category, val) => {
    if (val === "../../assets/pixiAssets/eyes/0.png") {
      setCustomization({ ...customization, [category]: null });
    } else {
      setCustomization({ ...customization, [category]: val });
    }
  };

  useEffect(() => {
    console.log("Customization Skin on load:", customization.skin); // Check if it's initialized correctly
  }, [customization]);

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
          <StyledButton onClick={exportImage}>Export Image</StyledButton>
          <StyledButton onClick={reset}>Reset</StyledButton>
          <StyledButton onClick={randomize}>Random</StyledButton>

          <StyledInput
            type="file"
            id="background-upload"
            accept="image/png, image/jpeg"
            onChange={handleBackgroundUpload}
          />
          <LabelButton htmlFor="background-upload">
            Upload Background
          </LabelButton>
        </div>
      </CustomizationSection>
    </GeneratorWrapper>
  );
};

export default PixiMaker;
