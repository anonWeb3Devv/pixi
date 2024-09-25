import styled from "styled-components";

export const MobileNavContainer = styled.div`
  position: fixed;
  z-index: 101;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100%;
  height: 100dvh;
`;

export const MobileNavMenuItem = styled.button`
  font-family: "Helvetica neue";
  font-size: 55px;
  border: none;
  background: none;
  cursor: pointer;
  text-transform: uppercase;
  color: #fff;
  margin: -15px;
  font-weight: 700;

  &:hover {
    color: #5f5f5f;
  }
`;

export const MobileNavOpen = styled.button<{
  $isMobileNavOpen: boolean;
}>`
  background: none;
  border: none;
  font-family: "Handjet-Light";
  font-size: 24px;
  text-transform: uppercase;
  color: #000;
  font-weight: 700;
  cursor: pointer;
  z-index: -1;
`;

export const MobileNavClose = styled.button`
  background: none;
  border: none;
  font-family: "Helvetica neue";
  font-size: 18px;
  color: #000;
  font-weight: 700;
  cursor: pointer;
`;
