import styled from "styled-components";

export const MobileNavContainer = styled.div<{
  $isOpen: boolean;
}>`
  position: fixed;
  z-index: 1000;
  background: #a0b4f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
  top: 0;
  left: 0;
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

export const MobileNavMenuItem = styled.button`
  font-family: "Handjet-Regular";
  font-size: 55px;
  border: none;
  background: none;
  cursor: pointer;
  text-transform: uppercase;
  color: #fff;
  margin: -10px;
  font-weight: 700;

  &:hover {
    color: #5f5f5f;
  }
`;

export const MobileNavClose = styled.button`
  background: none;
  border: none;
  font-family: "Handjet-Light";
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  position: absolute;
  top: 60px;
  right: 40px;
`;
