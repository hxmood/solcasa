"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getWhatsAppLink } from "@/utils/whatsapp";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappBookingUrl = getWhatsAppLink(
    "Hello SOLCASA Homestay! I would like to book a stay and check room availability."
  );

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/85 backdrop-blur-xl border-b border-outline-variant/30">
        <div className="h-20 max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-space-md hover:opacity-90 transition-opacity">
            <Image
              alt="SOLCASA Homestay Logo"
              className="h-8 w-auto object-contain"
              height={100}
              width={100}
              src="/logo.png"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-space-xl">
            <Link
              className="font-label-ui text-label-ui uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-200"
              href="/#the-homestay"
            >
              Home
            </Link>
            <Link
              className="font-label-ui text-label-ui uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-200"
              href="/#experience"
            >
              About
            </Link>
            <Link
              className="font-label-ui text-label-ui uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-200"
              href="/#why-solcasa"
            >
              Why Solcasa
            </Link>
            <Link
              className="font-label-ui text-label-ui uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-200"
              href="/gallery"
            >
              Gallery
            </Link>
            <Link
              className="font-label-ui text-label-ui uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-200"
              href="/#explore-wayanad"
            >
              Explore Us
            </Link>
            <Link
              className="font-label-ui text-label-ui uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-200"
              href="/#getting-here"
            >
              Getting Here
            </Link>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-space-lg">
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center px-space-lg py-space-xs rounded-DEFAULT bg-primary-container text-surface font-label-ui text-label-ui uppercase tracking-widest hover:bg-primary transition-all duration-300 shadow-xs cursor-pointer"
            >
              Book Your Stay
            </a>
           
            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1 text-primary cursor-pointer"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-surface border-b border-outline-variant px-gutter-mobile py-space-md space-y-space-sm animate-in slide-in-from-top-2 duration-200">
            <Link
              className="block font-label-ui text-label-ui uppercase tracking-wider text-on-surface py-2 border-b border-surface-container hover:text-primary"
              href="/#the-homestay"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="block font-label-ui text-label-ui uppercase tracking-wider text-on-surface py-2 border-b border-surface-container hover:text-primary"
              href="/#experience"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              className="block font-label-ui text-label-ui uppercase tracking-wider text-on-surface py-2 border-b border-surface-container hover:text-primary"
              href="/#why-solcasa"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Solcasa
            </Link>
            <Link
              className="block font-label-ui text-label-ui uppercase tracking-wider text-primary font-medium py-2 border-b border-surface-container hover:text-primary"
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery & Photos
            </Link>
            <Link
              className="block font-label-ui text-label-ui uppercase tracking-wider text-on-surface py-2 border-b border-surface-container hover:text-primary"
              href="/#explore-wayanad"
              onClick={() => setMobileMenuOpen(false)}
            >
              Explore Us
            </Link>
            <Link
              className="block font-label-ui text-label-ui uppercase tracking-wider text-on-surface py-2 border-b border-surface-container hover:text-primary"
              href="/#getting-here"
              onClick={() => setMobileMenuOpen(false)}
            >
              Getting Here
            </Link>
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center py-space-sm rounded-DEFAULT bg-primary-container text-surface font-label-ui text-label-ui uppercase tracking-widest mt-2 cursor-pointer"
            >
              Book Your Stay
            </a>
          </div>
        )}
      </header>
    </>
  );
}
