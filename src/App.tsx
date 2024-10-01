import { Header } from "./components/Header";
import { LandingSection } from "./sections/landing-section";
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
      {!isOverlayOpen && <Header />}
    </>
  );
}

export default App;
