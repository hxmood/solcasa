"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, Bed, Maximize2, Coffee, Wifi, Sparkles, ArrowUpRight, Check } from "lucide-react";
import { getWhatsAppLink } from "@/utils/whatsapp";

export default function VillasSection({ onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const suites = [
    {
      id: "mist-valley",
      title: "The Mist Valley Suite",
      tag: "Signature View",
      capacity: "2 Guests",
      bed: "1 King Bed",
      size: "480 sq ft",
      rate: "₹5,500 / night",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1UpXrtXKOHJCoP0ShceOZUoFFXqkKDdu7P-7O8FkvGg1GnsgGWibn-liwgcvGYHYVAMRoNWjS_wtxRk1fwoZnWF6gk_-2o48oBuvsj8Biukb7iwiokKEq0cnhJohHWSnSmIg2q3LxZ3_bjZNSZtfeyXanIm7zyiu4xVKrwL3pHnvBmej8fZx9zMCiWJsjccuR3hBmzxc6ZLbcHDhl-dkw7r7PTNSyQ7VBEPPkaY_aipAAudZlK_izBQaRw",
      description:
        "Perched high on the estate ridge with floor-to-ceiling glass doors opening onto a private mist-view deck.",
      features: [
        "Panoramic Tea Valley Balcony",
        "Artisanal Filter Coffee Bar",
        "Ensuite Rain Shower Sanctuary",
        "King Bed with Organic Linens",
      ],
    },
    {
      id: "canopy-haven",
      title: "The Canopy Haven Suite",
      tag: "Forest Immersion",
      capacity: "2-3 Guests",
      bed: "1 King Bed + Daybed",
      size: "560 sq ft",
      rate: "₹6,800 / night",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1WZK7g03XjP4jR7m1k0p-92Yl6OQWvUf-7y4M1n8Z3x5L9k2B8C6v4J7_a8K1m3N9=w1200",
      description:
        "Wrapped by tall bamboo groves and native forest canopy, offering supreme privacy and nature immersion.",
      features: [
        "Wrap-around Forest Verandah",
        "Custom Teak Wood Finishes",
        "Open-sky Shower Nook",
        "Private Reading Library",
      ],
    },
    {
      id: "estate-cottage",
      title: "The Estate Family Sanctuary",
      tag: "Exclusive Haven",
      capacity: "4-6 Guests",
      bed: "2 Bedrooms (2 Kings)",
      size: "1,150 sq ft",
      rate: "₹11,500 / night",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1XkY7_x8V4n2Wk5b1L7m3P9vO4J8x2M1k3n7B5vL9w2C6x8M3kY7_n1V2=w1200",
      description:
        "A spacious two-bedroom retreat designed for families and intimate groups seeking tranquility together.",
      features: [
        "Spacious Living Lounge & Hearth",
        "Dual Private Sun Decks",
        "Dedicated Estate Attendant",
        "Full Homestyle Dining Setup",
      ],
    },
  ];

  return (
    <section id="villas" className="w-full py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#f0eee9]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#54634a]" />
              <span className="label-caps text-[#54634a]">The Accommodations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1b1c19] font-normal tracking-tight">
              Wake Up to Green
            </h2>
            <p className="text-[#434840] text-base sm:text-lg font-light mt-3 max-w-2xl">
              Each room is intentionally designed as an architectural sanctuary where natural textures, fresh breeze, and tea plantation views lull you into complete peace.
            </p>
          </div>

          <a
            href={getWhatsAppLink("Hello SOLCASA Homestay! I would like to check availability for your suites and villas.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold label-caps text-[#223b1e] hover:text-[#54634a] transition-colors pb-1 border-b border-[#223b1e]"
          >
            Check All Suite Availability →
          </a>
        </div>

        {/* 3-Column Suite Cards (Editorial 4:5 Aspect Ratio) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {suites.map((suite) => (
            <article
              key={suite.id}
              className="group flex flex-col bg-[#fbf9f4] rounded-[4px] border border-[rgba(34,59,30,0.1)] overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#223b1e]/30"
            >
              {/* Image Container with 4:5 aspect ratio */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3.5] overflow-hidden bg-[#eae8e3]">
                <Image
                  src={suite.image}
                  alt={suite.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#fbf9f4]/90 backdrop-blur-md px-2.5 py-1 rounded-[2px] border border-[rgba(34,59,30,0.1)]">
                  <span className="label-caps text-[9px] text-[#223b1e]">
                    {suite.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#1b1c19] font-normal group-hover:text-[#223b1e] transition-colors">
                      {suite.title}
                    </h3>
                  </div>

                  <p className="label-ui text-[#223b1e] font-semibold mb-4">
                    {suite.rate}
                  </p>

                  <p className="text-xs sm:text-[13px] text-[#434840] leading-relaxed mb-6 font-light">
                    {suite.description}
                  </p>

                  {/* Room Specs */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-[rgba(34,59,30,0.08)] mb-6 text-center text-[11px] text-[#54634a]">
                    <div className="flex flex-col items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#223b1e]" />
                      <span>{suite.capacity}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 border-x border-[rgba(34,59,30,0.08)]">
                      <Bed className="w-3.5 h-3.5 text-[#223b1e]" />
                      <span>{suite.bed}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5 text-[#223b1e]" />
                      <span>{suite.size}</span>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <ul className="space-y-2 mb-6">
                    {suite.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#434840]">
                        <Check className="w-3.5 h-3.5 text-[#54634a] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <a
                  href={getWhatsAppLink(`Hello SOLCASA Homestay! I would like to book ${suite.title} (${suite.rate}). Please share availability.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-[3px] border border-[#223b1e] text-[#223b1e] hover:bg-[#223b1e] hover:text-[#fbf9f4] transition-all duration-300 inline-flex items-center justify-center gap-2 group-hover:bg-[#223b1e] group-hover:text-[#fbf9f4]"
                >
                  <span className="label-caps text-[10px]">Reserve This Suite</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
