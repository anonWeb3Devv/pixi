import {
  eyeOptions,
  headOptions,
  clothesOptions,
  handOptions,
  skinOptions,
  backgroundOptions,
  mouthOptions,
} from "../ScrollablePicker/options";

export interface Customization {
  eyes: string | null;
  head: string | null;
  mouth: string | null;
  pets: string | null;
  clothes: string | null;
  skin: string;
  hand: string | null;
  background: string;
  petOptions: string | null;
}

interface Option {
  value: string;
}

export const resetCustomization = (
  setCustomization: (customization: Customization) => void,
  defaultCustomization: Customization,
  setCustomBackground: (background: string | null) => void,
  setCurrentPetGif: (petGif: string | null) => void
): void => {
  setCustomization(defaultCustomization);
  setCustomBackground(null);
  setCurrentPetGif(null);
};

export const randomizeCustomization = (
  setCustomization: (customization: Customization) => void,
  setCustomBackground: (background: string | null) => void,
  setCurrentPetGif: (petGif: string | null) => void
): void => {
  const randomOption = (options: Option[]): string =>
    options.length > 1
      ? options[Math.floor(Math.random() * (options.length - 1) + 1)].value // Exclude the first option
      : options[0].value; // Fallback in case there's only one option

  setCustomization({
    eyes: randomOption(eyeOptions),
    head: randomOption(headOptions),
    mouth: randomOption(mouthOptions),
    pets: null,
    clothes: randomOption(clothesOptions),
    skin: randomOption(skinOptions),
    hand: randomOption(handOptions),
    background: randomOption(backgroundOptions),
    petOptions: null, 
  });

  setCustomBackground(null);
  setCurrentPetGif(null);
};

export const handleBackgroundUpload = (
  e: React.ChangeEvent<HTMLInputElement>,
  setCustomBackground: (background: string | null) => void,
  setCustomization: React.Dispatch<React.SetStateAction<Customization>>
): void => {
  const file = e.target.files ? e.target.files[0] : null;
  if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const uploadedImage =
        typeof event.target?.result === "string" ? event.target.result : "";

      setCustomBackground(uploadedImage);

      setCustomization((prevCustomization) => ({
        ...prevCustomization,
        background: uploadedImage, 
      }));
    };
    reader.readAsDataURL(file);
  } else {
    alert("Please upload a PNG or JPG image.");
  }
};


export const exportImage = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
): void => {
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

