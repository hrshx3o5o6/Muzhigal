import Link from "next/link"
import  Button  from "@/components/button"
import { FileDown } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
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
          <span className="text-xl font-bold">MusicBridge</span>
        </Link>
        <nav>
          <Link href="/" className="hover:text-purple-400 transition-colors">
            Back to Home
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
            <Button variant="outline" className="flex items-center gap-2">
              <FileDown className="w-4 h-4" />
              <span>Download PDF</span>
            </Button>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 md:p-8 border border-slate-700">
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 mb-6">
                <strong>Effective Date:</strong> 23 March 2025
              </p>

              <p className="text-slate-300 mb-6">
                Musically respects your privacy. This policy explains how we handle user data when you use our Chrome
                extension.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-white">1. Data Collection & Usage</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>Musically does not store, track, or share any personal data.</li>
                <li>The extension processes Spotify and YouTube Music links for conversion locally on your device.</li>
                <li>
                  No login or personal information is required for now. Only requirement is logging into your Google
                  account to access Youtube Music data and Spotify for music information data.
                </li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-white">2. Third-Party Services</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>Musically does not share data with third parties.</li>
                <li>
                  Any interactions with Spotify or YouTube Music are subject to their respective privacy policies.
                </li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-white">3. Security</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>
                  For now, in the initial iteration, Musically operates entirely client-side, ensuring that no data is
                  collected or stored.
                </li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-white">4. User Rights</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>Since no personal data is collected, there is no need for data access or deletion requests.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-white">5. Policy Updates</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>We may update this policy. Any changes will be reflected on this page.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-white">6. Contact</h2>
              <p className="text-slate-300">
                For any privacy-related concerns, please reach out at:{" "}
                <a href="mailto:hkangala@gmail.com" className="text-purple-400 hover:underline">
                  hkangala@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} MusicBridge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

