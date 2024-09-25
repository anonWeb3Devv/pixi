import {
  MobileNavClose,
  MobileNavContainer,
  MobileNavMenuItem,
} from "./mobile-nav.styles";
import { Link } from "react-scroll";
import { useEffect } from "react";

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
        close
      </MobileNavClose>
      <MobileNavMenuItem>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          duration={100}
          to="home"
          onClick={() => setIsMobileNavOpen(false)}
        >
          Home
        </Link>
      </MobileNavMenuItem>
      <MobileNavMenuItem>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          duration={100}
          to="about"
          onClick={() => setIsMobileNavOpen(false)}
        >
          About
        </Link>
      </MobileNavMenuItem>
      <MobileNavMenuItem>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          duration={100}
          to="pixi-runner"
          onClick={() => setIsMobileNavOpen(false)}
        >
          pixi runner
        </Link>
      </MobileNavMenuItem>
      <MobileNavMenuItem>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          duration={100}
          to="pixi-maker"
          onClick={() => setIsMobileNavOpen(false)}
        >
          pixi maker
        </Link>
      </MobileNavMenuItem>
      <MobileNavMenuItem>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          duration={100}
          to="memes"
          onClick={() => setIsMobileNavOpen(false)}
        >
          memes
        </Link>
      </MobileNavMenuItem>
      <MobileNavMenuItem>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          duration={100}
          to="news"
          onClick={() => setIsMobileNavOpen(false)}
        >
          news
        </Link>
      </MobileNavMenuItem>
      <MobileNavMenuItem>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          duration={100}
          to="social"
          onClick={() => setIsMobileNavOpen(false)}
        >
          social
        </Link>
      </MobileNavMenuItem>
      {/* Repeat for other links */}
    </MobileNavContainer>
  );
}
