"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, Maximize2, Compass } from "lucide-react";
import { gallerySections } from "@/data/galleryData";

export default function GalleryPreviewSection() {
  // Grab a curated set of preview images from different sections
  const previewImages = [
    {
      title: "The Highland Sanctuary",
      category: "Estate & Architecture",
      src: "/gallery/solcasa_estate_overview_1789280722970.jpg",
      span: "md:col-span-8 h-[340px] md:h-[420px]",
    },
    {
      title: "The Forest Suite",
      category: "Suites & Living",
      src: "/gallery/solcasa_master_suite_1789280742345.jpg",
      span: "md:col-span-4 h-[340px] md:h-[420px]",
    },
    {
      title: "Mountain Dining Terrace",
      category: "Highland Gastronomy",
      src: "/gallery/solcasa_dining_terrace_1789280770977.jpg",
      span: "md:col-span-4 h-[280px] md:h-[340px]",
    },
    {
      title: "Artisanal Bath Sanctuary",
      category: "Ensuite Sanctuaries",
      src: "/gallery/solcasa_bath_sanctuary_1789281087769.jpg",
      span: "md:col-span-4 h-[280px] md:h-[340px]",
    },
    {
      title: "Highland Bonfire Hearth",
      category: "Evenings & Starlight",
      src: "/gallery/solcasa_evening_bonfire_1789280793148.jpg",
      span: "md:col-span-4 h-[280px] md:h-[340px]",
    },
  ];

  return (
    <section className="w-full max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-3xl" id="gallery-preview">
      {/* Section Header */}
      <div data-aos="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl border-b border-surface-container pb-space-md gap-4">
        <div>
          <div className="inline-flex items-center gap-space-xs text-secondary font-label-caps text-label-caps uppercase tracking-[0.25em] mb-1">
            <span className="w-8 h-[1px] bg-secondary" />
            Visual Perspectives
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary tracking-tight">
            Moments at Solcasa
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md font-light">
            Take a visual tour through our misty estate, private wooden suites, mountain dining, and starlit fire hearths.
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-space-md py-space-xs bg-primary text-surface rounded-DEFAULT font-label-ui text-label-ui uppercase tracking-wider hover:bg-primary-container transition-all duration-300 shadow-xs shrink-0"
          >
            <span>View All Photos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Grid of Preview Images */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
        {previewImages.map((img, idx) => (
          <Link
            key={idx}
            href="/gallery"
            data-aos="fade-up"
            data-aos-delay={idx * 120}
            className={`${img.span} group relative rounded-DEFAULT overflow-hidden bg-surface-container border border-outline-variant/30 shadow-xs hover:shadow-xl transition-all duration-500 block`}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />

            {/* Subtle Gradient & Hover Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-black/10 opacity-60 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-between p-space-md">
              <div className="flex justify-end">
                <span className="w-8 h-8 rounded-full bg-surface/20 backdrop-blur-xs text-surface flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>
              <div>
                <span className="px-2.5 py-0.5 rounded-DEFAULT bg-surface/90 backdrop-blur-xs text-primary font-label-caps text-[9px] uppercase tracking-wider inline-block mb-1">
                  {img.category}
                </span>
                <h3 className="font-headline-sm text-lg sm:text-xl text-surface">
                  {img.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Link to Full Gallery */}
      <div data-aos="fade-up" className="mt-space-lg text-center">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-container font-label-ui text-label-ui uppercase tracking-widest transition-colors py-2"
        >
          <span>Explore All 5 Resort Image Wings &amp; Full Lightbox</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
