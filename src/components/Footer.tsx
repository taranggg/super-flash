import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="relative mt-16 text-cyan-100 backdrop-blur-xl bg-[rgba(20,20,30,0.7)] border-t border-[rgba(255,255,255,0.08)] rounded-t-3xl shadow-2xl"
      style={{
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        borderRadius: "2rem 2rem 0 0",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(20,20,30,0.7)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-20">
        {/* Logo and Slogan */}
        <div className="flex flex-col items-start md:items-start min-w-[180px]">
          <img
            src="/logoText.png"
            alt="SuperFlash Logo"
            className="h-12 w-auto mb-2 drop-shadow-lg"
          />
          <span className="text-sm text-cyan-400 opacity-80 pl-1">
            Fast, Secure, Elegant Crypto
          </span>
        </div>
        {/* Links */}
        <div className="flex flex-1 flex-wrap gap-10 justify-start md:justify-between w-full">
          <div className="flex flex-col items-start min-w-[120px]">
            <h3 className="font-bold mb-3 text-cyan-300 text-lg tracking-wide">
              Pages
            </h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link
                  href="/"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/resale"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Resale
                </Link>
              </li>
              <li>
                <Link
                  href="/operative"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Operative
                </Link>
              </li>
              <li>
                <Link
                  href="/payment/1"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Buy
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start min-w-[120px]">
            <h3 className="font-bold mb-3 text-cyan-300 text-lg tracking-wide">
              Legal
            </h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start min-w-[120px]">
            <h3 className="font-bold mb-3 text-cyan-300 text-lg tracking-wide">
              Social
            </h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Telegram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6">
        <hr className="border-t border-[rgba(255,255,255,0.12)] my-4" />
      </div>
      <div className="text-center text-xs text-cyan-400 pb-6">
        <span className="font-semibold tracking-wide">
          © {new Date().getFullYear()} SuperFlash. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
