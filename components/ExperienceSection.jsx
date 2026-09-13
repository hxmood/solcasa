"use client";

import Image from "next/image";
import { Coffee, Flame, Compass, UtensilsCrossed, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/utils/whatsapp";

export default function ExperienceSection({ onOpenBooking }) {
  const experiences = [
    {
      id: "tea-rituals",
      eyebrow: "Sensory Ritual",
      title: "Veranda Chai & Misty Mornings",
      description:
        "Begin your day at 6:30 AM as the valley mist slowly lifts. Enjoy a steaming brass tumbler of cardamom-infused estate tea freshly brewed from leaves picked right in our neighbouring hills.",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1UQam464kAIhfXQybUer3pP3KMSOPYKyfKASFAFbsPc84e92YPpOmnvWJ6Unq8BnUI53fTd0Akmjj0iWlYGe2e_gzXsU85Xhjc7QnIZ-vOkGo6mHWYSNJSjzi3G4zYAKvMUAzSB0-1PAoPiCtwoTYswonH0Owq0kNBqIJ3fRcgoI9cwDO86OTtuORrQ20NH1GhncLTFDdJ3FNPHbAd-HV3MBV_gGU-PToE3SugtMiRbXaJAlprmyloBzVM",
      tags: ["Highland Chai", "Sunrise Deck", "Estate Tea Leaves"],
    },
    {
      id: "gastronomy",
      eyebrow: "Culinary Heritage",
      title: "Authentic Kerala Highland Cuisine",
      description:
        "Savor wholesome home-style Kerala culinary delicacies made with freshly harvested native spices, slow-simmered curries, appams, Malabar parottas, and organic local produce cooked with love.",
      image:
        "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1200&q=80",
      tags: ["Farm-to-Table", "Native Spices", "Ayurvedic Recipes"],
    },
    {
      id: "trails",
      eyebrow: "Nature & Stillness",
      title: "Plantation Walks & Quiet Evenings",
      description:
        "Stroll along secluded estate trails flanked by pepper vines, silver oaks, and tea bushes. As twilight settles, gather by the warm outdoor fire pit under unpolluted starry night skies.",
      image:
        "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80",
      tags: ["Guided Walks", "Stargazing", "Bonfire Stories"],
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#f5f3ee] relative">
      <div className="max-w-[88rem] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="label-caps text-[#54634a] mb-2 block">
            Chapter 04 — Curated Moments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#1b1c19] tracking-[-0.015em]">
            Experiences in the Misty Highlands
          </h2>
          <p className="text-[#434840] text-base sm:text-lg font-light mt-3">
            Every moment at SOLCASA is shaped by the serene pace of nature, from morning tea rituals to nightfall forest melodies.
          </p>
        </div>

        {/* Alternating Editorial Lockup Cards */}
        <div className="space-y-20 sm:space-y-28">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={exp.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Frame */}
                <div
                  className={`lg:col-span-7 relative ${
                    !isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[16/10] rounded-[4px] overflow-hidden border border-[rgba(34,59,30,0.1)] shadow-lg bg-[#eae8e3]">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Narrative Typography */}
                <div
                  className={`lg:col-span-5 ${
                    !isEven ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"
                  }`}
                >
                  <span className="label-caps text-[#54634a] mb-2 block">
                    {exp.eyebrow}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1b1c19] font-normal mb-4 leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-[#434840] text-sm sm:text-base leading-relaxed font-light mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-[2px] bg-[#fbf9f4] border border-[rgba(34,59,30,0.1)] text-[11px] font-medium text-[#223b1e]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={getWhatsAppLink(`Hello SOLCASA Homestay! I would like to inquire about experiencing ${exp.title} during our stay.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold label-caps text-[#223b1e] hover:text-[#54634a] transition-colors pb-0.5 border-b border-[#223b1e]"
                  >
                    Experience This at Solcasa →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
