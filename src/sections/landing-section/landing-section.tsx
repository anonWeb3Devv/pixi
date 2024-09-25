import {
  LandingContainer,
  LandingHeading,
  LandingHintText,
} from "./landing-section.styles";
import { Header } from "../../components/Header";
import { Overlay } from "../../components/Overlay";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { DATA } from "../../data";
import useSound from "use-sound";
import click from "../../assets/sounds/clickSound.mp3";

type LandingSectionProps = {
  isOverlayOpen: boolean;
  setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function LandingSection({
  isOverlayOpen,
  setIsOverlayOpen,
}: LandingSectionProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [playClick] = useSound(click);

  async function handleCopy() {
    playClick();
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  }

  return (
    <>
      <Overlay
        isOverlayOpen={isOverlayOpen}
        setIsOverlayOpen={setIsOverlayOpen}
      />
      <LandingContainer>
        <CopyToClipboard text={DATA.contractAddress} onCopy={handleCopy}>
          <LandingHintText>
            {isCopied ? (
              "TOKEN ADDRESS COPIED!"
            ) : (
              <>
                <span className="desktop-only">
                  CA: FtHCi9cxJSSizrzMzsPjAfTfJi32V1CGRDM5Skqn4QBF
                </span>{" "}
                <span className="mobile-only"></span>
              </>
            )}
          </LandingHintText>
        </CopyToClipboard>

        <LandingHeading>
          The first pixelated cat meme coin on solana
        </LandingHeading>
      </LandingContainer>
    </>
  );
}
