import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-16 text-gray-200">
      <div className="max-w-screen-xl mx-auto py-8 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Pages</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/resale">Resale</Link>
            </li>
            <li>
              <Link href="/operative">Operative</Link>
            </li>
            <li>
              <Link href="/payment/1">Buy</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#">Terms</Link>
            </li>
            <li>
              <Link href="#">Privacy</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Social</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#">Twitter</Link>
            </li>
            <li>
              <Link href="#">Telegram</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 py-4 border-t border-gray-800">
        © {new Date().getFullYear()} SuperFlash
      </div>
    </footer>
  );
}
