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
  Customization,
  exportImage,
} from "./handlers";

const PixiMaker = () => {
  const defaultCustomization: Customization = {
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

  const [customization, setCustomization] =
    useState<Customization>(defaultCustomization);

  const [customBackground, setCustomBackground] = useState<string | null>(null);
  const [currentPetGif, setCurrentPetGif] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ffmpegRef = useRef(new FFmpeg());
  const messageRef = useRef<HTMLDivElement>(null);

  const loadFFmpeg = async () => {
    const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm";
    const ffmpeg = ffmpegRef.current;

    ffmpeg.on("log", ({ message }) => {
      if (messageRef.current) messageRef.current.innerHTML = message;
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
  };

  useEffect(() => {
    loadFFmpeg();
  }, []);

  const drawImageOnCanvas = (ctx: CanvasRenderingContext2D, src: string) => {
    return new Promise<void>((resolve, reject) => {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.height);
        resolve();
      };
      image.onerror = () => reject(`Error loading image: ${src}`);
    });
  };

  const loadImages = async () => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // First, load the background
    if (customBackground || customization.background) {
      await drawImageOnCanvas(
        ctx,
        customBackground || customization.background
      );
    }

    // Then, load the other elements
    await Promise.all(
      [
        customization.skin,
        customization.eyes,
        customization.head,
        customization.mouth,
        customization.clothes,
        customization.hand,
      ].map((src) => src && drawImageOnCanvas(ctx, src))
    );
  };

  useEffect(() => {
    loadImages();
  }, [customization, customBackground]);

  const exportGif = async () => {
    if (!canvasRef.current) {
      console.error("Canvas is not loaded");
      return;
    }

    const canvas = canvasRef.current;

    if (!currentPetGif) {
      // If there's no pet GIF, export the static image from the canvas
      exportImage(canvasRef);
      return;
    }

    canvas.toBlob(async (blob) => {
      if (!blob) {
        console.error("Failed to create blob from canvas");
        return;
      }

      const staticBackgroundURL = URL.createObjectURL(blob);

      const ffmpeg = ffmpegRef.current;

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

      const data = await ffmpeg.readFile("output.gif");
      const gifBlob = new Blob([data], { type: "image/gif" });

      // Revoke the blob URL to free up memory
      URL.revokeObjectURL(staticBackgroundURL);

      // Download the generated GIF
      const link = document.createElement("a");
      link.href = URL.createObjectURL(gifBlob);
      link.download = "character_with_pet.gif";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, "image/png");
  };

  const handlePetSelection = (petValue: string, petName: string): void => {
    if (petName === "None") {
      setCurrentPetGif(null);
    } else {
      setCurrentPetGif(petValue);
    }
  };

  const handleSelect = (category: string, val: any): void => {
    if (val.name === "None") {
      setCustomization({ ...customization, [category]: null });
    } else {
      setCustomization({ ...customization, [category]: val.value });
    }

    if (category === "background") {
      setCustomBackground(val.name === "None" ? null : val.value);
    } else if (category === "pets") {
      setCurrentPetGif(val.name === "None" ? null : val.value);
    }
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
              pointerEvents: "none",
            }}
          />
        )}
      </PreviewWrapper>
      <ButtonContainer>
        <StyledButton onClick={exportGif}>Download PIXI</StyledButton>
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
          onChange={(e) =>
            handleBackgroundUpload(e, setCustomBackground, setCustomization)
          }
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
