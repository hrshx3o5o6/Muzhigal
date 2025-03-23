import Link from "next/link"
// import { LinkConverter } from "@/components/link-converter"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
// import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { Extension  } from "@/components/extension"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-purple-600 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
          <span className="text-xl font-bold">Musically</span>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="#how-it-works" className="hover:text-purple-400 transition-colors">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#features" className="hover:text-purple-400 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="https://chrome.google.com/webstore"
                target="_blank"
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full transition-colors"
              >
                Get Extension
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bridge the Gap Between <span className="text-green-400">Spotify</span> and{" "}
            <span className="text-red-400">YouTube Music</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
            Seamlessly convert music links between platforms and share your favorite tunes with anyone, regardless of
            their music service preference.
          </p>
          <Extension />
  
        </section>

        {/* How It Works Section */}
        <HowItWorks />

        {/* Features Section */}
        <Features />
      </main>

      <Footer />
    </div>
  )
}

