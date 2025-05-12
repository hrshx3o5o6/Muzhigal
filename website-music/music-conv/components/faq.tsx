"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

type FaqItem = {
  question: string
  answer: string
}

export function Faq() {
  const faqItems: FaqItem[] = [
    {
      question: "Is my data private and secure?",
      answer:
        "Yes, absolutely! Musically operates entirely client-side, ensuring that no personal data is collected or stored. We don't track your listening habits or store any of your music links. Your privacy is our priority.",
    },
    {
      question: "Which music platforms are supported?",
      answer:
        "Currently, Musically supports Spotify and YouTube Music. We're working on adding support for Apple Music, Tidal, and other platforms in future updates.",
    },
    {
      question: "Which browsers does the extension work with?",
      answer:
        "Musically is available for Google Chrome, Microsoft Edge, and other Chromium-based browsers. We're working on versions for Firefox and Safari.",
    },
    {
      question: "Do I need accounts on both platforms?",
      answer:
        "No, you don't need accounts on both platforms to convert links. However, to play the music on the destination platform, the recipient will need an account there.",
    },
    {
      question: "Is Musically free to use?",
      answer: "Yes, Musically is completely free to use with no hidden fees or premium tiers.",
    },
    {
      question: "How accurate is the song matching?",
      answer:
        "Our algorithm is highly accurate at finding the exact same song across platforms. In rare cases where an exact match isn't available (such as exclusive releases), we'll find the closest alternative.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4 border border-purple-500/20 rounded-lg overflow-hidden">
              <button
                className="w-full p-6 text-left bg-slate-800/30 hover:bg-slate-800/50 flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-lg">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 bg-slate-800/10 border-t border-purple-500/10">
                  <p className="text-slate-300">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
