"use client";

import Image from "next/image";
import { ArrowRight, Calendar, Users, Home as HomeIcon, Sparkles } from "lucide-react";
import { getWhatsAppLink } from "@/utils/whatsapp";

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 px-6 sm:px-8 lg:px-12 overflow-hidden bg-[#fbf9f4]">
      {/* Background Image Container with Soft Editorial Gradient Mask */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://lh3.googleusercontent.com/aida/AEtjO1XSUfAhQm0a4GJQJrxyd0BWIHcQCpkTXvkrn_W2hmxU0wI6Q4nTNxiujP-lWqTIl67BrZcrmHT_1nfA0xmcq2xU3LBF7Ir0ifniSYCaAB0uTP7KzihIgeQXFfgGkZjmYLlzP8LhI2UYIC71tBxE9h1w4tnITZwSCZ2u67rIszCxBcGbyx103EjruMuY-h9La74KrOREZ9cMNjY1ksgomOvxt-zXEQVbhr_pQzzGJ066wOunuB4_AzsatAE"
          alt="Lush rolling green tea plantations and mist-covered emerald mountains at dawn in Wayanad, Kerala"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.03] transition-transform duration-[10000ms] hover:scale-100 opacity-90"
        />
        {/* Editorial Gradients for Legibility & Organic Texture */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#fbf9f4] via-[#fbf9f4]/45 to-[#fbf9f4]/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#fbf9f4_90%)] opacity-70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#223b1e]/20 bg-[#fbf9f4]/80 backdrop-blur-md mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#54634a] animate-ping" />
          <span className="label-caps text-[#223b1e]">
            Highland Sanctuary • Wayanad, Kerala
          </span>
        </div>

        {/* Main Display Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-[62px] font-normal leading-[1.14] tracking-[-0.02em] text-[#1b1c19] max-w-4xl mb-6">
          A peaceful homestay surrounded by the emerald beauty of{" "}
          <span className="italic text-[#223b1e] font-serif font-light">
            Wayanad
          </span>
        </h1>

        {/* Sub-prose narrative */}
        <p className="font-sans text-base sm:text-lg lg:text-xl text-[#434840] max-w-2xl font-light leading-relaxed mb-10">
          Where green tea plantations, mist-crowned mountains, crisp highland air,
          and a deep calm atmosphere awaken your spirit.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
          <a
            href={getWhatsAppLink("Hello SOLCASA Homestay! I would like to book a stay and check room availability.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-[3px] bg-[#223b1e] text-[#fbf9f4] hover:bg-[#2e4e29] transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span className="label-caps text-xs text-white">Book Your Stay</span>
            <ArrowRight className="w-4 h-4 text-[#b1cfa7] group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#the-homestay"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[3px] border border-[rgba(34,59,30,0.25)] bg-[#fbf9f4]/60 backdrop-blur-sm text-[#1b1c19] hover:bg-[#f5f3ee] hover:border-[#223b1e]/60 transition-all duration-300"
          >
            <span className="label-caps text-xs">Explore SOLCASA</span>
            <span className="text-xs">↓</span>
          </a>
        </div>

        {/* Floating Ambient Quick Booking Widget */}
        <div className="w-full max-w-4xl bg-[#ffffff]/90 backdrop-blur-md rounded-md p-4 sm:p-5 border border-[rgba(34,59,30,0.12)] misty-shadow flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full divide-y sm:divide-y-0 sm:divide-x divide-[rgba(34,59,30,0.08)]">
            <div className="px-3 py-1 flex items-center gap-3">
              <Calendar className="w-4 h-4 text-[#54634a]" />
              <div className="text-left">
                <p className="label-caps text-[9px] text-[#73796f]">Dates</p>
                <p className="text-xs sm:text-sm font-medium text-[#1b1c19]">Select Season</p>
              </div>
            </div>
            <div className="px-3 py-1 flex items-center gap-3">
              <Users className="w-4 h-4 text-[#54634a]" />
              <div className="text-left">
                <p className="label-caps text-[9px] text-[#73796f]">Guests</p>
                <p className="text-xs sm:text-sm font-medium text-[#1b1c19]">2-8 Persons</p>
              </div>
            </div>
            <div className="px-3 py-1 flex items-center gap-3">
              <HomeIcon className="w-4 h-4 text-[#54634a]" />
              <div className="text-left">
                <p className="label-caps text-[9px] text-[#73796f]">Experience</p>
                <p className="text-xs sm:text-sm font-medium text-[#1b1c19]">Private Estate Stay</p>
              </div>
            </div>
          </div>
          <a
            href={getWhatsAppLink("Hello SOLCASA Homestay! I would like to check room availability and package details.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto shrink-0 px-6 py-3 rounded-[3px] bg-[#223b1e] text-[#fbf9f4] hover:bg-[#2e4e29] transition-all text-xs font-semibold label-caps text-center"
          >
            Check Availability
          </a>
        </div>
      </div>
    </section>
  );
}
