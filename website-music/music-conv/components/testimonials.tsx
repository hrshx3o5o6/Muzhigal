import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          What Users Are Saying
        </h2>
        <p className="text-xl text-slate-300 text-center mb-16 max-w-2xl mx-auto">
          Join thousands of music lovers who are already bridging the platform gap
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-slate-800/30 border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white font-medium">
                  AK
                </div>
                <div>
                  <p className="font-medium">Alex Kim</p>
                  <p className="text-sm text-slate-400">Music Producer</p>
                </div>
              </div>
              <p className="text-slate-300">
                "This extension is a game-changer for sharing my music with clients who use different platforms. No more
                awkward moments when they can't access my playlists!"
              </p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#a855f7"
                    stroke="#a855f7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/30 border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white font-medium">
                  JD
                </div>
                <div>
                  <p className="font-medium">Jamie Davis</p>
                  <p className="text-sm text-slate-400">Podcast Host</p>
                </div>
              </div>
              <p className="text-slate-300">
                "I use this daily to convert song recommendations for my podcast listeners. It's fast, accurate, and has
                saved me hours of manual searching."
              </p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#a855f7"
                    stroke="#a855f7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/30 border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white font-medium">
                  SR
                </div>
                <div>
                  <p className="font-medium">Sofia Rodriguez</p>
                  <p className="text-sm text-slate-400">Music Enthusiast</p>
                </div>
              </div>
              <p className="text-slate-300">
                "My friends and I use different music services, which used to be a pain when sharing songs. This
                extension has completely solved that problem. Highly recommend!"
              </p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#a855f7"
                    stroke="#a855f7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
