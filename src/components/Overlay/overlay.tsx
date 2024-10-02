import { useEffect, useState } from "react";
import { OverlayWrapper, OverlayButton } from "./overlay.styles";

const FADE_OUT_DURATION = 1000;

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
    }, 700);
  }

  useEffect(() => {
    // block scrolling when overlay is open
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOverlayOpen]);

  return (
    <>
      {isOverlayOpen && (
        <OverlayWrapper $fadeOut={fadeOut}>
          <OverlayButton onClick={handleClick}>
            {!isButtonClicked ? "enter" : "loading..."}
          </OverlayButton>
        </OverlayWrapper>
      )}
    </>
  );
}
