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
import axios from "axios";
import Worker from "../workers/gif.worker.js?worker"; // Correct worker import

// import GIF from "gif.js.optimized";
import { GifReader } from "omggif";

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
  // exportImage,
} from "./handlers";

// const worker = new Worker(new URL("/gif.worker.js", import.meta.url));

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
  const worker = new Worker();

  const getStaticImageFromCanvas = (canvas) => {
    const ctx = canvas.getContext("2d");
    return ctx.getImageData(0, 0, canvas.width, canvas.height); // Capture the canvas content
  };
  useEffect(() => {
    worker.onmessage = (event) => {
      const blob = event.data;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "combined-pet-animation.gif";
      link.click();
      URL.revokeObjectURL(url);
      console.log("GIF download triggered.");
    };
  }, [worker]);

  const loadImageToCanvas = (src, ctx) => {
    return new Promise((resolve, reject) => {
      if (!src) {
        return reject(new Error("No background image provided."));
      }

      const image = new Image();
      image.src = src;
      image.onload = () => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas
        ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.height); // Draw image
        resolve();
      };
      image.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    });
  };

  const combineStaticWithGif = async (gifUrl) => {
    console.log("Starting GIF combination...");
    try {
      if (!gifUrl) {
        throw new Error("No pet GIF URL provided.");
      }

      const canvas = canvasRef.current;
      const offscreenCanvas = document.createElement("canvas");
      offscreenCanvas.width = canvas.width;
      offscreenCanvas.height = canvas.height;
      const offscreenCtx = offscreenCanvas.getContext("2d");

      const staticImageData = getStaticImageFromCanvas(canvas);

      console.log("Fetching GIF data...");
      const gifResponse = await axios.get(gifUrl, {
        responseType: "arraybuffer",
      });
      console.log("GIF data fetched.");

      const gifBuffer = new Uint8Array(gifResponse.data);
      const gifReader = new GifReader(gifBuffer);

      console.log("Creating GIF in the worker...");
      // Send width, height, and delay to the worker
      worker.postMessage({
        width: offscreenCanvas.width,
        height: offscreenCanvas.height,
        delay: gifReader.frameInfo(0).delay,
      });

      // Loop through GIF frames and send them to the worker
      for (
        let frameIndex = 0;
        frameIndex < gifReader.numFrames();
        frameIndex++
      ) {
        console.log(
          `Adding frame ${frameIndex + 1} of ${gifReader.numFrames()}`
        );

        offscreenCtx.putImageData(staticImageData, 0, 0); // Reset offscreen canvas with static image

        const frameData = new Uint8ClampedArray(
          gifReader.width * gifReader.height * 4
        );
        gifReader.decodeAndBlitFrameRGBA(frameIndex, frameData);
        const gifImageData = new ImageData(
          frameData,
          gifReader.width,
          gifReader.height
        );
        offscreenCtx.putImageData(gifImageData, 0, 0); // Draw GIF frame

        // Send frame to the worker
        worker.postMessage({
          imageData: offscreenCtx.getImageData(
            0,
            0,
            offscreenCanvas.width,
            offscreenCanvas.height
          ),
          type: "addFrame",
        });
      }

      // Tell worker to finish GIF generation
      worker.postMessage({ type: "finish" });
      console.log("Sent 'finish' message to worker.");
    } catch (error) {
      console.error("Error combining static image and GIF:", error);
    }
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

  // Handle pet selection to set the GIF overlay
  const handlePetSelection = (petValue) => {
    setCurrentPetGif(petValue); // Directly set the GIF URL from the value
  };

  const handleSelect = (category, val) => {
    setCustomization({ ...customization, [category]: val });
  };

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
          onClick={() =>
            combineStaticWithGif("/assets/pixiAssets/petsGifs/1.gif")
          }
        >
          Export GIF
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
