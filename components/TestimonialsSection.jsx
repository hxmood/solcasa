"use client";

import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      quote:
        "The sheer silence of waking up to mist drifting across tea rows from our private balcony was restorative beyond words. SOLCASA captures the authentic soul of Wayanad without any artificial luxury cliches.",
      author: "Aarav & Meera Sen",
      role: "Architectural Writers, Bangalore",
      stay: "The Mist Valley Suite • 4 Nights",
    },
    {
      quote:
        "The home-cooked spiced breakfast, the aroma of cardamom in the evening air, and the genuine hospitality made us feel like cherished personal guests. We will return every monsoon.",
      author: "Dr. Elena Rostova",
      role: "Botanical Researcher, Zurich",
      stay: "The Canopy Haven • 6 Nights",
    },
    {
      quote:
        "A rare retreat where you can truly hear yourself think. The tea garden walks at sunrise and stargazing by the campfire made our family holiday unforgettable.",
      author: "Vikramaditya Nambiar",
      role: "Filmmaker, Kochi",
      stay: "Estate Family Sanctuary • 3 Nights",
    },
  ];

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-[#fbf9f4] border-t border-[rgba(34,59,30,0.08)] relative">
      <div className="max-w-[88rem] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-caps text-[#54634a] mb-2 block">
            Guest Reflections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1b1c19] tracking-[-0.015em]">
            Echoes of Sanctuary
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[4px] bg-[#ffffff] border border-[rgba(34,59,30,0.08)] flex flex-col justify-between shadow-sm relative"
            >
              <Quote className="w-8 h-8 text-[#54634a]/20 mb-4" />
              <p className="font-serif italic text-[#1b1c19] text-base leading-relaxed mb-6 font-light">
                “{rev.quote}”
              </p>
              <div className="pt-4 border-t border-[rgba(34,59,30,0.06)]">
                <p className="font-medium text-sm text-[#1b1c19] font-serif">{rev.author}</p>
                <p className="text-xs text-[#54634a] font-light">{rev.role}</p>
                <p className="label-caps text-[9px] text-[#73796f] mt-1">{rev.stay}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
