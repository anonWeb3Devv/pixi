import { Header } from "./components/Header";
import { LandingSection } from "./sections/landing-section";
import { AboutSection } from "./sections/about-section";
import { MemesBackground } from "./components/MemesBackground";
import { MemeSection } from "./sections/memes-section";
import { useState } from "react";
import PixiMaker from "./components/PixiMaker";
import Socials from "./containers/Socials";

// import "./App.css";

function App() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);

  return (
    <main>
      <LandingSection
        isOverlayOpen={isOverlayOpen}
        setIsOverlayOpen={setIsOverlayOpen}
      />
      <AboutSection />
      <MemesBackground>
        <MemeSection />
      </MemesBackground>
      {!isOverlayOpen && <Header />}

      <PixiMaker />
      <Socials />
    </main>
  );
}

export default App;
