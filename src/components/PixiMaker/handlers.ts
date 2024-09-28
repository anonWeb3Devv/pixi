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
    petOptions: null // Ensure this matches the type definition in Customization
  });
  setCustomBackground(null);
  setCurrentPetGif(null);
};

export const handleBackgroundUpload = (
  e: React.ChangeEvent<HTMLInputElement>,
  setCustomBackground: (background: string | null) => void
): void => {
  const file = e.target.files ? e.target.files[0] : null;
  if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = typeof event.target?.result === "string" ? event.target.result : "";

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const size = Math.min(img.width, img.height);
        canvas.width = 600;
        canvas.height = 600;

        ctx?.drawImage(
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

export const exportImage = (canvasRef: React.RefObject<HTMLCanvasElement>): void => {
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
