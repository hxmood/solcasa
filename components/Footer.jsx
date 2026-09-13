"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low mt-space-4xl">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop pt-space-3xl pb-space-2xl">
        <div className="text-center mb-space-3xl">
          <p className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.25em] mb-space-xs">
            Sanctuary in the Western Ghats
          </p>
          <h2 className="font-headline-md text-headline-md text-primary tracking-wide">
            Nature • Comfort • Peace
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl pb-space-3xl">
          {/* Col 1 */}
          <div className="md:col-span-5 space-y-space-md">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-sm text-headline-sm tracking-widest text-primary">
                SOLCASA
              </span>
              <span className="font-body-sm text-body-sm text-secondary italic">
                — Wayanad, Kerala
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              An intentional boutique homestay immersed within mist-clad estates,
              tea gardens, and sacred groves. Conceived for stillness, quiet
              luxury, and architectural harmony.
            </p>
            <div className="pt-space-xs space-y-space-2xs font-body-sm text-body-sm text-on-surface-variant">
              <p>Thalappuzha, Wayanad District, Kerala 670644</p>
              <p className="text-primary">
                solcasawayanad@gmail.com • +91 81570 09613
              </p>
            </div>
          </div>
          {/* Col 2 */}
          <div className="md:col-span-3 space-y-space-md">
            <h3 className="font-label-caps text-label-caps uppercase text-primary tracking-widest">
              Navigation
            </h3>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/#the-homestay"
                >
                  The Homestay &amp; Suites
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors font-medium text-primary"
                  href="/gallery"
                >
                  Resort Image Gallery &amp; Wings
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/#experience"
                >
                  Highland Gastronomy &amp; Tea
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/#why-solcasa"
                >
                  Sustainable Architectural Philosophy
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/#explore-wayanad"
                >
                  Curated Wayanad Expeditions
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/#getting-here"
                >
                  Directions &amp; Mountain Access
                </Link>
              </li>
            </ul>
          </div>
          {/* Col 3 */}
          <div className="md:col-span-4 space-y-space-md">
            <h3 className="font-label-caps text-label-caps uppercase text-primary tracking-widest">
              The Solcasa Chronicle
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Receive seasonal reflections, monsoon journals, and private
              retreat offerings from the estate.
            </p>
            <form
              className="space-y-space-xs pt-space-2xs"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex items-center">
                <input
                  className="w-full bg-surface-container-lowest px-space-md py-space-sm font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-bright rounded-DEFAULT"
                  placeholder="Your email address"
                  type="email"
                />
                <button
                  className="px-space-md py-space-sm bg-primary-container text-surface font-label-ui text-label-ui uppercase tracking-wider hover:bg-primary transition-colors rounded-DEFAULT shrink-0"
                  type="submit"
                >
                  Join
                </button>
              </div>
              <p className="font-body-sm text-[11px] text-outline">
                We respect sanctuary and silence. Never shared.
              </p>
            </form>
          </div>
        </div>
        {/* Legal & Copyright */}
        <div className="pt-space-xl flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-surface-variant font-body-sm text-body-sm border-t border-surface-container">
          <p>© 2026 SOLCASA Highland Sanctuary. All rights reserved.</p>
          <div className="flex items-center gap-space-lg font-label-caps text-label-caps uppercase">
            <a className="hover:text-primary transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Estate Terms
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Environmental Charter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
