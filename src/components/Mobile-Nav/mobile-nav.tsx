import {
  MobileNavClose,
  MobileNavContainer,
  MobileNavMenuItem,
} from "./mobile-nav.styles";
import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
interface MobileNavProps {
  setIsMobileNavOpen: (value: boolean) => void;
  isMobileNavOpen: boolean;
}

export function MobileNav({
  setIsMobileNavOpen,
  isMobileNavOpen,
}: MobileNavProps) {
  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = isMobileNavOpen ? "hidden" : "auto";
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [isMobileNavOpen]);

  return (
    <MobileNavContainer $isOpen={isMobileNavOpen}>
      <MobileNavClose onClick={() => setIsMobileNavOpen(false)}>
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
          <path d="M13.46 12L19 17.54V19h-1.46L12 13.46 6.46 19H5v-1.46L10.54 12 5 6.46V5h1.46L12 10.54 17.54 5H19v1.46L13.46 12z" />
        </svg>
      </MobileNavClose>
      <MobileNavMenuItem>
        <HashLink
          to="/"
          onClick={() => {
            setIsMobileNavOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Home
        </HashLink>
      </MobileNavMenuItem>
      <MobileNavMenuItem>
        <HashLink to="/#about" onClick={() => setIsMobileNavOpen(false)}>
          About
        </HashLink>
      </MobileNavMenuItem>
      <MobileNavMenuItem>
        <RouterLink
          // activeClass="active"
          // spy={true}
          // smooth={true}
          // duration={100}
          to="/runner"
          onClick={() => setIsMobileNavOpen(false)}
        >
          pixi runner
        </RouterLink>
      </MobileNavMenuItem>
      <MobileNavMenuItem>
        <RouterLink
          // activeClass="active"
          // spy={true}
          // smooth={true}
          // duration={100}
          to="/maker"
          onClick={() => setIsMobileNavOpen(false)}
        >
          pixi maker
        </RouterLink>
      </MobileNavMenuItem>
      <MobileNavMenuItem>
        <HashLink to="/#memes" onClick={() => setIsMobileNavOpen(false)}>
          memes
        </HashLink>
      </MobileNavMenuItem>

      <MobileNavMenuItem>
        <HashLink to="/#social" onClick={() => setIsMobileNavOpen(false)}>
          social
        </HashLink>
      </MobileNavMenuItem>
      {/* Repeat for other links */}
    </MobileNavContainer>
  );
}
