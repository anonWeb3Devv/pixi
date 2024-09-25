import { MobileNavContainer, MobileNavMenuItem } from "./mobile-nav.styles";
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
      if (isMobileNavOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileNavOpen]);

  function closeMobileNav() {
    setIsMobileNavOpen(false);
  }

  return (
    <MobileNavContainer>
      <MobileNavMenuItem>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          duration={100}
          to="home"
          onClick={closeMobileNav}
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
      </MobileNavMenuItem>
      <MobileNavMenuItem>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          duration={100}
          to="about"
          onClick={closeMobileNav}
        >
          about
        </Link>
      </MobileNavMenuItem>
      <MobileNavMenuItem>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          duration={100}
          to="pixi-runner"
          onClick={closeMobileNav}
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
          onClick={closeMobileNav}
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
          to="news"
          onClick={closeMobileNav}
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
          to="memes"
          onClick={closeMobileNav}
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
          to="social"
          onClick={closeMobileNav}
        >
          social
        </Link>
      </MobileNavMenuItem>
    </MobileNavContainer>
  );
}

export default MobileNav;
