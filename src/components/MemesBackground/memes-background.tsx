import styled from "styled-components";
import { Accessory1, Accessory2, Accessory3, Accessory4 } from "./memes-styles";

const AccessoryBackgroundWrapper = styled.div`
  position: relative;
  /* overflow: hidden; */
  /* height: 100dvh; */
  min-height: 100svh;
  overflow-y: visible;
  overflow-x: clip;
`;

export function MemesBackground({ children }: { children: React.ReactNode }) {
  return (
    <AccessoryBackgroundWrapper>
      {/* <Accessory1 src="/assets/3.png" />
      <Accessory2 src="/assets/6.png" />
      <Accessory3 src="/assets/13.png" />
      <Accessory4 src="/assets/19.png" /> */}
      <Accessory1 src="/assets/pixiAssets/skin/1.png" />

      {children}
    </AccessoryBackgroundWrapper>
  );
}
