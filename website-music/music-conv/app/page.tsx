// import Link from "next/link"
// // import { LinkConverter } from "@/components/link-converter"
// import { HowItWorks } from "@/components/how-it-works"
// import { Features } from "@/components/features"
// // import { Testimonials } from "@/components/testimonials"
// import { Footer } from "@/components/footer"
// import { Extension  } from "@/components/extension"

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
//       <header className="container mx-auto py-6 px-4 flex justify-between items-center">
//         <div className="flex items-center gap-2">
//           <div className="bg-purple-600 p-2 rounded-full">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="text-white"
//             >
//               <path d="M9 18V5l12-2v13" />
//               <circle cx="6" cy="18" r="3" />
//               <circle cx="18" cy="16" r="3" />
//             </svg>
//           </div>
//           <span className="text-xl font-bold">Musically</span>
//         </div>
//         <nav>
//           <ul className="flex gap-6">
//             <li>
//               <Link href="#how-it-works" className="hover:text-purple-400 transition-colors">
//                 How It Works
//               </Link>
//             </li>
//             <li>
//               <Link href="#features" className="hover:text-purple-400 transition-colors">
//                 Features
//               </Link>
//             </li>
//             <li>
//               <Link href="/privacy-policy" className="hover:text-purple-400 transition-colors">
//                 Privacy Policy
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="https://chrome.google.com/webstore"
//                 target="_blank"
//                 className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full transition-colors"
//               >
//                 Get Extension
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       <main>
//         {/* Hero Section */}
//         <section className="container mx-auto px-4 py-20 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             Bridge the Gap Between <span className="text-green-400">Spotify</span> and{" "}
//             <span className="text-red-400">YouTube Music</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
//             Seamlessly convert music links between platforms and share your favorite tunes with anyone, regardless of
//             their music service preference.
//           </p>
//           <Extension />
  
//         </section>

//         {/* How It Works Section */}
//         <HowItWorks />

//         {/* Features Section */}
//         <Features />
//       </main>

//       <Footer />
//     </div>
//   )
// }


import Link from "next/link"
import { Clipboard, Share2, Zap, Globe, Clock, Github, Mail } from "lucide-react"
// import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-2 rounded-full">
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
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
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
              <Link href="#testimonials" className="hover:text-purple-400 transition-colors">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-purple-400 transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          href="https://chrome.google.com/webstore"
          target="_blank"
          className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 px-5 py-2.5 rounded-full transition-colors font-medium"
        >
          Get Extension
        </Link>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
            One Link to Share Them All
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
            Seamlessly convert between Spotify and YouTube Music links with a single click. Share your favorite tunes
            with anyone, regardless of their music service preference.
          </p>

          <Link
            href="https://chrome.google.com/webstore"
            target="_blank"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 px-8 py-4 rounded-full transition-colors font-medium text-lg"
          >
            Get the Extension
            {/* <ArrowRight className="w-5 h-5" /> */}
          </Link>

          {/* <div className="mt-16 max-w-4xl mx-auto">
            <div className="p-6 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-xl border border-purple-500/30">
              <div className="text-center py-8">
                <h3 className="text-2xl font-semibold mb-4">Ready to simplify your music sharing?</h3>
                <p className="text-slate-300 mb-6">
                  Install Musically today and start sharing music across platforms with ease.
                </p>
                <Link
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 px-6 py-3 rounded-full transition-colors font-medium"
                >
                  Get Started Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div> */}
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              How It Works
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-slate-800/50 rounded-xl p-8 text-center border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clipboard className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Paste a Link</h3>
                <p className="text-slate-300">Simply paste your Spotify or YouTube Music link into the extension.</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-8 text-center border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Auto Convert</h3>
                <p className="text-slate-300">
                  Our smart algorithm instantly finds the matching song on the other platform.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-8 text-center border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Share2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Share!</h3>
                <p className="text-slate-300">Copy the converted link with one click and share it with anyone.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Features
            </h2>
            <p className="text-xl text-slate-300 text-center mb-16 max-w-2xl mx-auto">
              Designed to make music sharing effortless across platforms
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-slate-800/30 rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Instant Conversion</h3>
                <p className="text-slate-300">
                  Convert links in seconds with our powerful algorithm. No more manual searching.
                </p>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Platform Compatibility</h3>
                <p className="text-slate-300">
                  Seamlessly bridge the gap between Spotify and YouTube Music with perfect matching.
                </p>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Time-Saving</h3>
                <p className="text-slate-300">
                  What used to take minutes now takes seconds. Share music without the hassle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <Testimonials /> */}

        {/* FAQ Section */}
        <Faq />
      </main>

      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-2 rounded-full">
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

            <nav className="mb-6 md:mb-0">
              <ul className="flex flex-wrap gap-6 justify-center">
                <li>
                  <Link href="/privacy-policy" className="text-slate-300 hover:text-purple-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com"
                    target="_blank"
                    className="text-slate-300 hover:text-purple-400 transition-colors flex items-center gap-1"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:hkangala@gmail.com"
                    className="text-slate-300 hover:text-purple-400 transition-colors flex items-center gap-1"
                  >
                    <Mail className="w-4 h-4" />
                    Support
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
            <p>© {new Date().getFullYear()} Musically. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
