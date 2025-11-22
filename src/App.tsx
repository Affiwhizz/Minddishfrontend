import { Hero } from "./components/Hero";
import { MarqueeSection } from "./components/MarqueeSection";
import { HowItWorks } from "./components/HowItWorks";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { StorytellingSection } from "./components/StorytellingSection";
import { DemoInput } from "./components/DemoInput";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Hero />
      <MarqueeSection />
      <HowItWorks />
      <FeaturesGrid />
      <StorytellingSection />
      <DemoInput />
      <Footer />
    </div>
  );
}
