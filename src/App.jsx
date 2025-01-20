import "./App.css";
import { Slider } from "./components/Slider";
import { Hero } from "./components/Hero";
import { InterestSection } from "./components/InterestCategory";
import { CommunitySection } from "./components/CommunityCard";
import { EventSection } from "./components/Event";
import { DownloadApp } from "./components/DownloadApp";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <section className="drop-shadow-xl">
        <Hero></Hero>
        <Slider></Slider>
      </section>
      <InterestSection />
      <CommunitySection />
      <EventSection />
      <DownloadApp />
      <Footer></Footer>
    </>
  );
}

export default App;
