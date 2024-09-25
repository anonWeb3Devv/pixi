import { LandingContainer, LandingHeading } from "./landing-section.styles";
import { Header } from "../../components/Header";
import { Overlay } from "../../components/Overlay";

type LandingSectionProps = {
  isOverlayOpen: boolean;
  setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function LandingSection({
  isOverlayOpen,
  setIsOverlayOpen,
}: LandingSectionProps) {
  return (
    <>
      <Overlay
        isOverlayOpen={isOverlayOpen}
        setIsOverlayOpen={setIsOverlayOpen}
      />
      <LandingContainer></LandingContainer>
    </>
  );
}
