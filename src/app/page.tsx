import FloatingLines from "@/components/FloatingLines";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/SectionContainer";

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
          {/* Hero Section */}
          <SectionContainer className="flex flex-col items-center justify-center text-center gap-6 pt-16 pb-24 bg-cyan-900/60 rounded-2xl shadow-xl backdrop-blur-lg border border-cyan-400/20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-cyan-400 drop-shadow-lg">
              Fast for everyone
            </h1>
            <p className="text-lg md:text-2xl max-w-xl mb-8 text-cyan-200">
              SuperFlash is the fastest way to buy FLASH USDT. Instant, secure,
              and trusted by thousands.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/payment/1"
                className="px-6 py-3 rounded-full bg-cyan-500 text-cyan-950 font-semibold shadow-lg hover:scale-105 transition backdrop-blur-lg"
              >
                Buy Now
              </a>
              <a
                href="#how-it-works"
                className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-800/30 hover:text-cyan-300 transition backdrop-blur-lg"
              >
                How it works
              </a>
            </div>
          </SectionContainer>

          {/* Partners / Logos Section */}
          <SectionContainer className="text-center">
            <h2 className="text-xl font-semibold mb-6">Trusted by</h2>
            <div className="flex flex-wrap justify-center gap-8 grayscale hover:grayscale-0 transition">
              {/* Replace with actual logos */}
              <div className="w-32 h-16 bg-zinc-200 dark:bg-zinc-800 rounded flex items-center justify-center">
                Logo 1
              </div>
              <div className="w-32 h-16 bg-zinc-200 dark:bg-zinc-800 rounded flex items-center justify-center">
                Logo 2
              </div>
              <div className="w-32 h-16 bg-zinc-200 dark:bg-zinc-800 rounded flex items-center justify-center">
                Logo 3
              </div>
              <div className="w-32 h-16 bg-zinc-200 dark:bg-zinc-800 rounded flex items-center justify-center">
                Logo 4
              </div>
            </div>
          </SectionContainer>

          {/* Roadmap / How It Works */}
          <SectionContainer>
            <h2 className="text-2xl font-bold mb-8 text-center">
              How It Works
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              {[
                "Select USDT amount",
                "Agree to terms",
                "Make payment",
                "Submit transaction ID",
                "Receive FLASH USDT",
              ].map((step, i) => (
                <div key={step} className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-500 dark:bg-cyan-400 text-white dark:text-black flex items-center justify-center font-bold text-lg mb-2">
                    {i + 1}
                  </div>
                  {/* Icon placeholder */}
                  <div className="w-8 h-8 bg-zinc-200 dark:bg-zinc-800 rounded mb-2" />
                  <div className="font-semibold text-center">{step}</div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                    Step description
                  </div>
                </div>
              ))}
            </div>
          </SectionContainer>

          {/* Features / Value Proposition */}
          <SectionContainer>
            <h2 className="text-2xl font-bold mb-8 text-center">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                "Fast Delivery",
                "Secure Payments",
                "Trusted Support",
                "Best Rates",
              ].map((feature, i) => (
                <div
                  key={feature}
                  className="rounded-xl bg-zinc-100 dark:bg-zinc-900 p-6 shadow hover:shadow-lg transition flex flex-col items-center"
                >
                  {/* Icon placeholder */}
                  <div className="w-10 h-10 bg-sky-500 dark:bg-cyan-400 rounded-full mb-4" />
                  <div className="font-semibold mb-2">{feature}</div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                    2-line description for {feature}.
                  </div>
                </div>
              ))}
            </div>
          </SectionContainer>

          {/* Important Notes / Details */}
          <SectionContainer>
            <h2 className="text-xl font-semibold mb-4">Important Notes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
                <li>Not tradable</li>
                <li>Non-expiring</li>
                <li>Minimum & maximum buying limits</li>
                <li>Pump/Tank protection</li>
              </ul>
              <div className="hidden md:block">
                {/* Illustration placeholder */}
                <div className="w-full h-40 bg-zinc-200 dark:bg-zinc-800 rounded" />
              </div>
            </div>
          </SectionContainer>

          {/* FAQ Section */}
          <SectionContainer>
            <h2 className="text-2xl font-bold mb-8 text-center">FAQs</h2>
            <div className="max-w-2xl mx-auto">
              {/* Replace with Accordion component later */}
              <div className="mb-4 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-4">
                <div className="font-semibold">How fast is delivery?</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">
                  Usually within 10-15 minutes.
                </div>
              </div>
              <div className="mb-4 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-4">
                <div className="font-semibold">Is it secure?</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">
                  Yes, all payments are verified and protected.
                </div>
              </div>
              <div className="mb-4 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-4">
                <div className="font-semibold">What are the limits?</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">
                  See notes above for min/max limits.
                </div>
              </div>
            </div>
          </SectionContainer>
        </main>
        <Footer />
      </div>
    </div>
  );
}
