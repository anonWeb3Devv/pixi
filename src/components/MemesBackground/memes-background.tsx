import styled from "styled-components";
import { Accessory1 } from "./memes-styles";

const AccessoryBackgroundWrapper = styled.div`
  position: relative;

  min-height: 100svh;
  overflow-y: visible;
  overflow-x: clip;
`;

export function MemesBackground({ children }: { children: React.ReactNode }) {
  return (
    <AccessoryBackgroundWrapper>
      <Accessory1 src="/assets/pixiAssets/skin/1.png" />

      {children}
    </AccessoryBackgroundWrapper>
  );
}
