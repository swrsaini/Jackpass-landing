import "./App.css";
import { Slider } from "./components/Slider";
import { Hero } from "./components/Hero";
import { InterestSection } from "./components/InterestCategory";
import { CommunitySection } from "./components/CommunityCard";
function App() {
  return (
    <>
      <section className="drop-shadow-xl">
        <Hero></Hero>
        <Slider></Slider>
      </section>
      <InterestSection />
      <CommunitySection />
      <CommunitySection />
    </>
  );
}

export default App;
