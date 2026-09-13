"use client";

import { getWhatsAppLink } from "@/utils/whatsapp";

export default function StayWithUs() {
  const whatsappBookingUrl = getWhatsAppLink(
    "Hello SOLCASA Homestay! I would like to book a stay with you. Please let me know the available dates, rates, and package details."
  );
  const whatsappContactUrl = getWhatsAppLink(
    "Hi SOLCASA team, I have an inquiry regarding your homestay in Wayanad."
  );
  return (
    <section
      id="stay-with-us"
      className="w-full bg-primary py-space-4xl text-surface relative overflow-hidden"
    >
      {/* Subtle mist background graphic */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
      <div className="relative z-10 max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop text-center">
        <div data-aos="fade-up" data-aos-duration="900" className="max-w-3xl mx-auto space-y-space-lg">
          {/* Header */}
          <div className="space-y-space-xs">
            <span className="font-label-caps text-label-caps text-secondary-fixed-dim uppercase tracking-[0.3em] block">
              Plan Your Retreat
            </span>
            <h2 className="font-display-xl text-headline-lg lg:text-display-xl text-surface tracking-tight font-normal">
              Stay With Us
            </h2>
          </div>
          {/* Verbatim Subtitle */}
          <p className="font-subheading-lg text-subheading-lg text-surface/85 font-light leading-relaxed max-w-2xl mx-auto">
            Looking for a peaceful escape surrounded by nature? Make SOLCASA
            your base for exploring Wayanad—or simply stay in, slow down, and
            enjoy the view. Book your stay at SOLCASA Homestay.
          </p>
          {/* Brand Marquee Feature Box */}
          <div data-aos="zoom-in" data-aos-delay="150" className="my-space-2xl py-space-xl px-space-lg bg-surface/5 backdrop-blur-md rounded-DEFAULT max-w-xl mx-auto">
            <span className="font-headline-lg text-headline-lg text-surface tracking-[0.35em] block">
              SOLCASA
            </span>
            <span className="font-label-caps text-label-caps text-secondary-container uppercase tracking-[0.3em] mt-space-xs block">
              Nature • Comfort • Peace
            </span>
          </div>
          {/* Action Buttons Trio */}
          <div data-aos="fade-up" data-aos-delay="250" className="flex flex-col sm:flex-row items-center justify-center gap-space-md pt-space-xs">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center px-space-2xl py-space-sm bg-surface text-primary font-label-ui text-label-ui uppercase tracking-[0.2em] rounded-DEFAULT hover:bg-surface-container-low transition-colors shadow-2xl"
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center px-space-xl py-space-sm bg-surface/10 backdrop-blur-md text-surface font-label-ui text-label-ui uppercase tracking-[0.2em] rounded-DEFAULT hover:bg-surface/20 transition-colors"
              href={whatsappContactUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center px-space-xl py-space-sm bg-surface/10 backdrop-blur-md text-surface font-label-ui text-label-ui uppercase tracking-[0.2em] rounded-DEFAULT hover:bg-surface/20 transition-colors"
              href="https://maps.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
