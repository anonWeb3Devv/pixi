import { LandingSection } from "./sections/landing-section";
import { AboutSection } from "./sections/about-section";
import { MemeSection } from "./sections/memes-section";
import Socials from "./containers/Socials";
import { useAppContext } from "./context/app-context";

function App() {
  const { isOverlayOpen, setIsOverlayOpen } = useAppContext();

  return (
    <main>
      <LandingSection
        isOverlayOpen={isOverlayOpen}
        setIsOverlayOpen={setIsOverlayOpen}
      />
      <AboutSection />
      <MemeSection />
      <Socials />
    </main>
  );
}

export default App;
