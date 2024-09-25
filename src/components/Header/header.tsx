import {
  NavItemContainer,
  Navigation,
  NavItemSpan,
  MobileNavToggle,
} from "./header-styles";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { MobileNav } from "../Mobile-Nav";

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileNavOpen(false);
  }

  function toggleMobileNav() {
    setIsMobileNavOpen((prevState) => !prevState);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <Navigation>
        {!isMobile && (
          <NavItemContainer>
            <NavItemSpan>
              <Link
                spy={true}
                smooth={true}
                duration={100}
                to="home"
                onClick={scrollToTop}
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
                </svg>
              </Link>
            </NavItemSpan>
            <NavItemSpan>
              <Link
                spy={true}
                smooth={true}
                duration={100}
                to="about"
                onClick={scrollToTop}
              >
                about
              </Link>
            </NavItemSpan>
            <NavItemSpan>
              <Link
                spy={true}
                smooth={true}
                duration={100}
                to="pixi-runner"
                onClick={scrollToTop}
              >
                pixi runner
              </Link>
            </NavItemSpan>
            <NavItemSpan>
              <Link
                spy={true}
                smooth={true}
                duration={100}
                to="pixi-maker"
                onClick={scrollToTop}
              >
                pixi maker
              </Link>
            </NavItemSpan>
            <NavItemSpan>
              <Link
                spy={true}
                smooth={true}
                duration={100}
                to="memes"
                onClick={scrollToTop}
              >
                memes
              </Link>
            </NavItemSpan>
            <NavItemSpan>
              <Link
                spy={true}
                smooth={true}
                duration={100}
                to="news"
                onClick={scrollToTop}
              >
                news
              </Link>
            </NavItemSpan>
            <NavItemSpan>
              <Link
                spy={true}
                smooth={true}
                duration={100}
                to="social"
                onClick={scrollToTop}
              >
                social
              </Link>
            </NavItemSpan>
          </NavItemContainer>
        )}
        {isMobile && (
          <MobileNavToggle onClick={toggleMobileNav}>
            {isMobileNavOpen ? "close" : "menu"}
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
