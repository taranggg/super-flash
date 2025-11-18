import FloatingLines from "@/components/FloatingLines";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ImportantNotesSection } from "@/components/sections/ImportantNotesSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-blue-950 text-cyan-100">
      <div className="absolute inset-0 z-0">
        <FloatingLines
          linesGradient={["#38bdf8", "#06b6d4", "#818cf8"]}
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[6, 8, 5]}
          lineDistance={[5, 7, 4]}
          animationSpeed={1.2}
          interactive={true}
          parallax={true}
          mixBlendMode="screen"
        />
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <TrustedBySection />
          <HowItWorksSection />
          <FeaturesSection />
          <ImportantNotesSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
