import { useState, useEffect } from "react";
import { OverlayWrapper, OverlayButton } from "./overlay.styles";

const FADE_OUT_DURATION = 1500;

type OverlayProps = {
  isOverlayOpen: boolean;
  setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Overlay({ isOverlayOpen, setIsOverlayOpen }: OverlayProps) {
  const [fadeOut, setFadeOut] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  function handleClick() {
    setIsButtonClicked(true);
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsOverlayOpen(false), FADE_OUT_DURATION);
    }, 7000);
  }

  return (
    <>
      {isOverlayOpen && (
        <OverlayWrapper $fadeOut={fadeOut}>
          <OverlayButton onClick={handleClick}>enter</OverlayButton>
        </OverlayWrapper>
      )}
    </>
  );
}
