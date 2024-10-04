import {
  NavItemContainer,
  Navigation,
  NavItemSpan,
  MobileNavToggle,
} from "./header-styles";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { MobileNav } from "../Mobile-Nav";
import { HashLink } from "react-router-hash-link";

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [isScrolling, setIsScrolling] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileNavOpen(false);
  }

  function toggleMobileNav() {
    setIsMobileNavOpen((prevState) => !prevState);
  }

  useEffect(() => {
    // find if the user is scrolling
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsVisible(window.scrollY > 10);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navigation $isScrolling={isScrolling}>
        {!isMobile && (
          <NavItemContainer>
            <NavItemSpan>
              <HashLink to="/" onClick={scrollToTop}>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
                </svg>
              </HashLink>
            </NavItemSpan>

            <NavItemSpan>
              <HashLink to="/#about">about</HashLink>
            </NavItemSpan>
            <NavItemSpan>
              <RouterLink to="/runner">pixi runner</RouterLink>
            </NavItemSpan>
            <NavItemSpan>
              <RouterLink to="/maker">pixi maker</RouterLink>
            </NavItemSpan>
            <NavItemSpan>
              <HashLink to="/#memes">memes</HashLink>
            </NavItemSpan>
            <NavItemSpan>
              <HashLink to="/#social">social</HashLink>
            </NavItemSpan>
          </NavItemContainer>
        )}
        {isMobile && (
          <MobileNavToggle onClick={toggleMobileNav}>
            {isMobileNavOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M13.46 12L19 17.54V19h-1.46L12 13.46 6.46 19H5v-1.46L10.54 12 5 6.46V5h1.46L12 10.54 17.54 5H19v1.46L13.46 12z" />
              </svg>
            ) : (
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 8h16M4 16h16" />
              </svg>
            )}
          </MobileNavToggle>
        )}
      </Navigation>
      {isMobileNavOpen && (
        <MobileNav
          setIsMobileNavOpen={setIsMobileNavOpen}
          isMobileNavOpen={isMobileNavOpen}
        />
      )}
    </>
  );
}
