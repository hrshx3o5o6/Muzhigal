import { Check, Clock, Search, Lock, Zap, Globe } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Use MusicBridge?</h2>
        <p className="text-xl text-slate-300 text-center mb-16 max-w-2xl mx-auto">
          Our Chrome extension makes sharing music across platforms effortless
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Instant Conversion</h3>
            <p className="text-slate-300">
              No manual searching required. Convert links in seconds with our powerful algorithm.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Accurate Matching</h3>
            <p className="text-slate-300">
              Get the exact same song, album, or playlist across platforms with precise matching.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">No Login Required</h3>
            <p className="text-slate-300">
              Just paste, convert, and share. No accounts or personal information needed.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Completely Free</h3>
            <p className="text-slate-300">
              Enjoy seamless music sharing at zero cost. No hidden fees or premium tiers.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Save Time</h3>
            <p className="text-slate-300">
              Stop manually searching for songs. Our extension saves you time with one-click conversion.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Universal Music</h3>
            <p className="text-slate-300">
              Share music with anyone, regardless of which streaming platform they prefer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
