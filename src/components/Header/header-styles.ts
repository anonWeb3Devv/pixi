import styled from "styled-components";
import { mobileFirst } from "../../constants/breakpoints";

export const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 25px;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 102;
  margin-top: 20px;

  @media ${mobileFirst.sm} {
    padding: 20px 60px;
  }
`;

export const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavItemSpan = styled.span`
  font-size: 24px;
  text-transform: uppercase;
  cursor: pointer;
  font-family: "Handjet-Light";
  color: #000;

  @media ${mobileFirst.sm} {
    font-size: 16px;
  }
`;

export const NavLogoSpan = styled.span`
  font-size: 24px;
  text-transform: uppercase;
  cursor: pointer;
  color: #000;
  font-family: "Handjet-Light";
  font-weight: 700;
  letter-spacing: -1px;

  @media ${mobileFirst.sm} {
    font-size: 16px;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const MobileNavContainer = styled.div<{
  $isOpen: boolean;
}>`
  position: fixed;
  inset: 0;
  z-index: 100000;
  background-color: #ffda06;

  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Handjet-Light";
  font-size: 55px;
  color: white;

  > button {
    position: absolute;
    top: 10px;
    right: 25px;
    font-size: 40px;
    padding: 10px 20px;
    cursor: pointer;
  }

  a {
    cursor: pointer;
  }

  ${NavUl} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
`;

export const MenuButton = styled.button`
  font-size: 24px;
  text-transform: uppercase;
  cursor: pointer;
  font-family: "Handjet-Light";
  color: #000;
`;
