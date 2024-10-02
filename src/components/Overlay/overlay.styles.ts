import styled, { css } from "styled-components";
import { mobileFirst } from "../../constants/breakpoints";

const FADE_OUT_DURATION = 500;

export const OverlayWrapper = styled.div<{ $fadeOut: boolean }>`
  background: #1a291e;
  height: 100svh;
  width: 100dvw;
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  font-size: 30px;
  padding: 30px 40px;
  text-transform: uppercase;
  transition: 0.2s ease-in;
  border-radius: 10px;
  border: #fff dotted;
  color: #fff;
  background: transparent;

  &:hover {
    background: #fff;
    border: none;
    color: #000;
  }

  @media ${mobileFirst.xs} {
    font-size: 48px;
    padding: 30px 40px;
  }
`;
