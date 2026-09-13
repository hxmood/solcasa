"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Compass, Volume2, VolumeX } from "lucide-react";
import { getWhatsAppLink } from "@/utils/whatsapp";

export default function Navbar({ onOpenBooking, isAudioPlaying, onToggleAudio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Homestay", href: "#the-homestay" },
    { name: "Suites & Villas", href: "#villas" },
    { name: "Experiences", href: "#experience" },
    { name: "Why Solcasa", href: "#why-solcasa" },
    { name: "Explore Wayanad", href: "#explore" },
    { name: "Getting Here", href: "#getting-here" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#fbf9f4]/90 backdrop-blur-md shadow-sm border-b border-[rgba(34,59,30,0.08)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[88rem] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-[#223b1e]/20 flex items-center justify-center bg-[#f0eee9] group-hover:bg-[#223b1e] group-hover:text-white transition-all duration-300">
            <span className="font-serif text-sm font-semibold tracking-tighter text-[#223b1e] group-hover:text-[#fbf9f4]">
              S
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-medium tracking-[0.12em] text-[#1b1c19] uppercase">
              Solcasa
            </span>
            <span className="label-caps text-[9px] tracking-[0.24em] text-[#54634a] -mt-1">
              Wayanad • Highlands
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium tracking-[0.03em] text-[#434840] hover:text-[#223b1e] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#223b1e] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Ambient Soundscape Toggle */}
          <button
            type="button"
            onClick={onToggleAudio}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(34,59,30,0.15)] bg-[#f5f3ee]/80 text-[#54634a] hover:text-[#223b1e] hover:border-[#223b1e]/40 transition-all text-xs font-medium"
            title={isAudioPlaying ? "Mute mountain breeze" : "Play mountain breeze soundscape"}
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#223b1e] animate-pulse" />
                <span className="label-caps text-[10px]">Mist Audio: On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="label-caps text-[10px]">Soundscape</span>
              </>
            )}
          </button>

          {/* Book CTA */}
          <a
            href={getWhatsAppLink("Hello SOLCASA Homestay! I would like to book a stay and check room availability.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-[3px] bg-[#223b1e] text-[#fbf9f4] hover:bg-[#2e4e29] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span className="label-caps text-[10px] text-white">Book Your Stay</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#b1cfa7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onToggleAudio}
            className="p-2 text-[#54634a]"
            aria-label="Toggle audio"
          >
            {isAudioPlaying ? <Volume2 className="w-4 h-4 text-[#223b1e]" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1b1c19] hover:text-[#223b1e]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbf9f4] border-b border-[rgba(34,59,30,0.1)] px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif text-[#1b1c19] hover:text-[#223b1e] py-1 border-b border-[rgba(34,59,30,0.05)]"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={getWhatsAppLink("Hello SOLCASA Homestay! I would like to book a stay and check room availability.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 w-full inline-flex items-center justify-center gap-2 py-3 rounded-[3px] bg-[#223b1e] text-[#fbf9f4]"
            >
              <span className="label-caps text-[11px] text-white">Reserve Your Haven</span>
              <ArrowUpRight className="w-4 h-4 text-[#b1cfa7]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
