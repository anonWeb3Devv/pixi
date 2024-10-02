import { Header } from "./components/Header";
import { LandingSection } from "./sections/landing-section";
import { AboutSection } from "./sections/about-section";
import { MemesBackground } from "./components/MemesBackground";
import { MemeSection } from "./sections/memes-section";
import { useState } from "react";
import "./App.css";

function App() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);

  return (
    <>
      <LandingSection
        isOverlayOpen={isOverlayOpen}
        setIsOverlayOpen={setIsOverlayOpen}
      />
      <AboutSection />
      <MemesBackground>
        <MemeSection />
      </MemesBackground>
      {!isOverlayOpen && <Header />}
    </>
  );
}

export default App;
