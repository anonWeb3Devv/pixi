import styled, { css } from "styled-components";

const FADE_OUT_DURATION = 500;

export const OverlayWrapper = styled.div<{ $fadeOut: boolean }>`
  background: #1a291e;
  height: 100svh;
  width: 100dvw;
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding-inline: 50px;
  gap: 40px;
  transition: opacity ${FADE_OUT_DURATION}ms ease;

  ${(props) =>
    props.$fadeOut &&
    css`
      opacity: 0;
    `}
`;

export const OverlayButton = styled.button`
  font-family: "Handjet-Light";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 80px;
  font-size: 48px;
  padding: 30px 40px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s ease-in;
  z-index: 20000;
  border-radius: 10px;
  border: #fff dotted;
  color: #fff;
  background: transparent;

  &:hover {
    background: #fff;
    border: none;
    color: #000;
  }
`;
