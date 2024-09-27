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
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

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

import {
  resetCustomization,
  randomizeCustomization,
  handleBackgroundUpload,
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
  const [currentPetGif, setCurrentPetGif] = useState(null); // Store the GIF URL

  const ffmpegRef = useRef(new FFmpeg());
  const [ffmpegLoaded, setFfmpegLoaded] = useState(false);

  const loadFFmpeg = async () => {
    const baseURL = "https://unpkg.com/@ffmpeg/core-mt@0.12.6/dist/esm";
    const ffmpeg = ffmpegRef.current;

    ffmpeg.on("log", ({ message }) => {
      if (messageRef.current) messageRef.current.innerHTML = message; // Display FFmpeg logs
    });

    // Load FFmpeg with core, wasm, and worker URLs
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        "application/wasm"
      ),
      workerURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.worker.js`,
        "text/javascript"
      ),
    });

    setFfmpegLoaded(true); // Set state to indicate FFmpeg has been loaded
  };

  useEffect(() => {
    loadFFmpeg();
  }, []);

  useEffect(() => {
    console.log(ffmpegRef);
  });

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

  const exportGif = async () => {
    if (!currentPetGif || !canvasRef.current) {
      console.log(currentPetGif);
      console.log(canvasRef.current);
      console.error("FFmpeg is not loaded or required data is missing");
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Get the static image from the canvas
    const staticBackgroundURL = canvas.toDataURL("image/png");

    const ffmpeg = ffmpegRef.current;
    console.log(ffmpeg);

    // Write the static background and the pet GIF into FFmpeg's virtual filesystem
    await ffmpeg.writeFile(
      "background.png",
      await fetchFile(staticBackgroundURL)
    );
    await ffmpeg.writeFile("pet.gif", await fetchFile(currentPetGif));

    // Run the FFmpeg overlay command to combine background and GIF
    await ffmpeg.exec([
      "-i",
      "background.png",
      "-i",
      "pet.gif",
      "-filter_complex",
      "[1:v][0:v]scale2ref[gif][bg];[bg][gif]overlay",
      "output.gif",
    ]);

    // Read the output GIF
    const data = await ffmpeg.readFile("output.gif");
    const gifURL = URL.createObjectURL(
      new Blob([data.buffer], { type: "image/gif" })
    );

    // Download the generated GIF
    const link = document.createElement("a");
    link.href = gifURL;
    link.download = "character_with_pet.gif";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <StyledButton onClick={exportGif}>Export GIF</StyledButton>
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

        <StyledButton onClick={loadFFmpeg}>Load</StyledButton>

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
