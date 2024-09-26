// pixiHandlers.js
import {
  eyeOptions,
  headOptions,
  clothesOptions,
  handOptions,
  skinOptions,
  backgroundOptions,
  mouthOptions,
//   petOptions,
} from "../ScrollablePicker/options";

export const resetCustomization = (setCustomization, defaultCustomization, setCustomBackground, setCurrentPetGif) => {
  setCustomization(defaultCustomization);
  setCustomBackground(null);
  setCurrentPetGif(null); // Reset the GIF overlay
};

export const randomizeCustomization = (
  setCustomization,
  setCustomBackground,
  setCurrentPetGif
) => {
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


export const handleBackgroundUpload = (e, setCustomBackground) => {
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


export const exportImage = (canvasRef) => {
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

