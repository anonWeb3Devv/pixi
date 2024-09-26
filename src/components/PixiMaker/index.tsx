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
import GIF from "gif.js";

import {
  eyeOptions,
  headOptions,
  clothesOptions,
  handOptions,
  skinOptions,
  backgroundOptions,
  mouthOptions,
  petOptions,
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
    petOptions: null,
  };

  const [customization, setCustomization] = useState(defaultCustomization);
  const [customBackground, setCustomBackground] = useState(null);
  const canvasRef = useRef(null);
  const [currentPetGif, setCurrentPetGif] = useState(null); // Store the GIF URL
  const workerRef = useRef(null);
  useEffect(() => {
    // Initialize the worker
    workerRef.current = new Worker(
      new URL("/worker/worker.js", import.meta.url)
    );

    workerRef.current.onmessage = (e) => {
      if (e.data.type === "finished") {
        const url = URL.createObjectURL(e.data.blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "animated.gif";
        link.click();
        URL.revokeObjectURL(url);
      }
    };

    return () => {
      workerRef.current.terminate(); // Clean up the worker on unmount
    };
  }, []);

  const captureGIF = () => {
    const canvas = canvasRef.current;

    if (!canvas) {
      console.error("Canvas not available");
      return;
    }

    // Initialize the GIF
    const gif = new GIF({
      workers: 2, // Number of web workers to use
      quality: 10, // Lower is better quality
      workerScript: "/path/to/gif.worker.js", // Path to the worker script
    });

    // Capture frames for 3 seconds at 12 frames per second
    const duration = 3000; // 3 seconds
    const fps = 12; // Frames per second
    const frameInterval = 1000 / fps; // Time between frames in ms

    let currentTime = 0;
    const interval = setInterval(() => {
      if (currentTime >= duration) {
        clearInterval(interval);

        // Once all frames are added, render the GIF
        gif.render();
      } else {
        // Add a frame to the GIF
        gif.addFrame(canvas, { copy: true, delay: frameInterval });
        currentTime += frameInterval;
      }
    }, frameInterval);

    // Once the GIF is rendered, save the file
    gif.on("finished", (blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "custom_animation.gif";
      link.click();
    });
  };

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

  const exportImage = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "custom_pixi.png";
      link.click();
    } else {
      console.error("Canvas is not available for export");
    }
  };

  const reset = () => {
    setCustomization(defaultCustomization);
    setCustomBackground(null);
    setCurrentPetGif(null); // Reset the GIF overlay
  };

  const randomize = () => {
    const randomOption = (options) =>
      options[Math.floor(Math.random() * options.length)].value;

    setCustomization({
      eyes: randomOption(eyeOptions),
      head: randomOption(headOptions),
      mouth: randomOption(mouthOptions),
      pets: null,
      clothes: randomOption(clothesOptions),
      skin: randomOption(skinOptions),
      hand: randomOption(handOptions),
      background: randomOption(backgroundOptions),
    });
    setCustomBackground(null);
    setCurrentPetGif(null); // Clear the pet GIF
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

          const size = Math.min(img.width, img.height);
          canvas.width = 600;
          canvas.height = 600;

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

          setCustomBackground(canvas.toDataURL("image/png"));
        };
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a PNG or JPG image.");
    }
  };

  // Handle pet selection to set the GIF overlay
  const handlePetSelection = (petValue) => {
    setCurrentPetGif(petValue); // Directly set the GIF URL from the value
  };

  const handleSelect = (category, val) => {
    setCustomization({ ...customization, [category]: val });
  };

  console.log(currentPetGif);
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
        <StyledButton onClick={captureGIF}>Export Image</StyledButton>
        <StyledButton onClick={reset}>Reset</StyledButton>
        <StyledButton onClick={randomize}>Random</StyledButton>

        <StyledInput
          type="file"
          id="background-upload"
          accept="image/png, image/jpeg"
          onChange={handleBackgroundUpload}
        />
        <LabelButton htmlFor="background-upload">Upload Background</LabelButton>
      </ButtonContainer>

      {/* Customization Options */}
      <CustomizationSection>
        <CategoryHeading>Background</CategoryHeading>
        <ScrollablePicker
          category="background"
          options={backgroundOptions}
          onSelect={handleSelect}
        />

        <CategoryHeading>Skin</CategoryHeading>
        <ScrollablePicker
          options={skinOptions}
          category="skin"
          onSelect={handleSelect}
        />

        <CategoryHeading>Head</CategoryHeading>
        <ScrollablePicker
          options={headOptions}
          category="head"
          onSelect={handleSelect}
        />

        <CategoryHeading>Eyes</CategoryHeading>
        <ScrollablePicker
          options={eyeOptions}
          category="eyes"
          onSelect={handleSelect}
        />

        <CategoryHeading>Clothes</CategoryHeading>
        <ScrollablePicker
          category="clothes"
          options={clothesOptions}
          onSelect={handleSelect}
        />

        <CategoryHeading>Pets</CategoryHeading>
        <ScrollablePetPicker
          options={petOptions}
          onSelect={handlePetSelection}
        />

        <CategoryHeading>Mouth</CategoryHeading>
        <ScrollablePicker
          options={mouthOptions}
          category="mouth"
          onSelect={handleSelect}
        />

        <CategoryHeading>Hand</CategoryHeading>
        <ScrollablePicker
          category="hand"
          options={handOptions}
          onSelect={handleSelect}
        />
      </CustomizationSection>
    </GeneratorWrapper>
  );
};

export default PixiMaker;
