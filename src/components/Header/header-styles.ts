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

export const MobileNavToggle = styled.button`
  background: none;
  border: none;
  font-family: "Handjet-Light";
  font-size: 24px;
  text-transform: uppercase;
  color: #000;
  font-weight: 700;
  cursor: pointer;
  z-index: 103;
  position: absolute;
  top: 40px;
  right: 40px;
`;
