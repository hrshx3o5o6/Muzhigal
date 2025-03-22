import { ArrowRight } from "lucide-react"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-400">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Open the Extension</h3>
            <p className="text-slate-300">Click the puzzle icon and pin the google extension.</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-400">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Login</h3>
            <p className="text-slate-300">Login to your Spotify and Youtube Music accounts.</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-400">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Paste Your Link</h3>
            <p className="text-slate-300">Drop your Spotify or YouTube Music song/playlist link in the converter.</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-center relative">
            <div className="hidden md:block absolute top-1/2 -left-4 transform -translate-y-1/2">
              
            </div>
            <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-400">4</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Convert With a Click</h3>
            <p className="text-slate-300">Our smart tool finds the exact match on the other platform instantly.</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-center relative">
            <div className="hidden md:block absolute top-1/2 -left-4 transform -translate-y-1/2">
              
            </div>
            <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-400">5</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Copy & Share</h3>
            <p className="text-slate-300">Get your new link, copy it with one click, and share with anyone.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

