import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/SectionContainer";

export default function Payment() {
  return (
    <div className="min-h-screen text-black dark:text-zinc-100 font-sans">
      <Header />
      <main>
        <SectionContainer className="text-center pt-16 pb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-cyan-400">
            Buy FLASH USDT
          </h1>
          <p className="text-lg md:text-xl text-cyan-300">
            Dynamic rate: 1 USDT = 5 FLASH USDT
          </p>
          <div className="mt-4 text-sm text-cyan-400">Order ID: #123456</div>
          <div className="flex justify-center gap-4 mt-4">
            <span className="px-3 py-1 rounded bg-green-900 text-green-300 text-xs">
              Verified
            </span>
            <span className="px-3 py-1 rounded bg-blue-900 text-blue-300 text-xs">
              10-15 min delivery
            </span>
          </div>
        </SectionContainer>
        <SectionContainer>
          <h2 className="text-2xl font-bold mb-8 text-center">Buy Form</h2>
          <form className="max-w-xl mx-auto grid gap-6">
            <select className="px-4 py-3 rounded bg-zinc-900 border border-zinc-700 text-cyan-100">
              <option>Select Network</option>
              <option>TRC20</option>
              <option>Binance</option>
              <option>ETH</option>
            </select>
            <input
              type="number"
              placeholder="FLASH amount"
              className="px-4 py-3 rounded bg-zinc-900 border border-zinc-700 text-cyan-100 placeholder:text-cyan-400"
            />
            <input
              type="text"
              placeholder="Wallet address"
              className="px-4 py-3 rounded bg-zinc-900 border border-zinc-700 text-cyan-100 placeholder:text-cyan-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 rounded bg-zinc-900 border border-zinc-700 text-cyan-100 placeholder:text-cyan-400"
            />
            <div className="text-sm text-cyan-400">
              You must pay: <span className="font-bold">[calculated USDT]</span>
            </div>
            <div className="text-sm text-cyan-400">
              You will receive:{" "}
              <span className="font-bold">[calculated FLASH USDT]</span>
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-cyan-400 text-cyan-950 font-semibold shadow hover:scale-105 transition"
            >
              Create Order
            </button>
          </form>
        </SectionContainer>
        <SectionContainer>
          <h2 className="text-xl font-semibold mb-4">Instructions</h2>
          <ul className="list-decimal pl-6 space-y-2 text-cyan-300">
            <li>Send USDT to the wallet shown after submitting</li>
            <li>Send transaction ID</li>
            <li>We verify and deliver FLASH USDT</li>
            <li>Estimated delivery: 10-15 minutes</li>
          </ul>
        </SectionContainer>
        <SectionContainer>
          <h2 className="text-2xl font-bold mb-8 text-center">FAQs</h2>
          <div className="max-w-2xl mx-auto">
            <div className="mb-4 rounded-lg bg-zinc-900 p-4">
              <div className="font-semibold">Is my payment secure?</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                Yes, all payments are verified and protected.
              </div>
            </div>
            <div className="mb-4 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-4">
              <div className="font-semibold">How long does delivery take?</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                Usually within 10-15 minutes.
              </div>
            </div>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
}
