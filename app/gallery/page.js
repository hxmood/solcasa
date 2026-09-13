"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { galleryCategories, gallerySections } from "@/data/galleryData";
import { getWhatsAppLink } from "@/utils/whatsapp";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles, 
  MapPin, 
  Layers, 
  ArrowLeft, 
  Calendar,
  Compass,
  Eye,
  SlidersHorizontal
} from "lucide-react";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  // Flatten all images for universal indexing & lightbox browsing
  const allImages = gallerySections.flatMap((section) => section.images);

  // Filter images based on selected category
  const filteredSections = selectedCategory === "all"
    ? gallerySections
    : gallerySections.filter((section) => section.category === selectedCategory);

  const displayedImages = selectedCategory === "all"
    ? allImages
    : allImages.filter((img) => img.category === selectedCategory);

  // Lightbox handlers
  const openLightbox = (imageObj) => {
    const idx = displayedImages.findIndex((img) => img.id === imageObj.id);
    if (idx !== -1) {
      setActiveImageIndex(idx);
    }
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev + 1) % displayedImages.length);
  }, [activeImageIndex, displayedImages.length]);

  const prevImage = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev - 1 + displayedImages.length) % displayedImages.length);
  }, [activeImageIndex, displayedImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, nextImage, prevImage]);

  const currentLightboxImage = activeImageIndex !== null ? displayedImages[activeImageIndex] : null;

  return (
    <>
      <Header />

      <main className="w-full pt-20 bg-surface min-h-screen text-on-surface">
        {/* HERO SECTION */}
        <section className="relative w-full bg-surface-container-low border-b border-surface-container py-space-3xl lg:py-space-4xl overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10">
            {/* Breadcrumb */}
            <div data-aos="fade-down" className="flex items-center gap-space-xs text-secondary font-label-caps text-label-caps uppercase tracking-widest mb-space-sm">
              <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Home
              </Link>
              <span>•</span>
              <span className="text-on-surface-variant font-medium">Estate Gallery</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
              <div data-aos="fade-up" className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/60 text-on-secondary-container font-label-caps text-[11px] uppercase tracking-wider mb-space-xs">
                  <Sparkles className="w-3.5 h-3.5 text-secondary" />
                  Sanctuary Visual Archive
                </div>

                <h1 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary tracking-tight">
                  Life at Solcasa in Pictures
                </h1>

                <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed max-w-2xl mt-space-xs">
                  Immerse yourself in moments of mist, timber sanctuaries, lush tea trails, 
                  and tranquil evenings under the Western Ghats sky.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CATEGORY FILTER BAR */}
        <section className="sticky top-20 z-40 bg-surface/90 backdrop-blur-md border-b border-outline-variant/40 py-space-sm shadow-xs">
          <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">

            <div className="hidden md:flex items-center gap-2 text-xs text-on-surface-variant font-body-sm">
              <Eye className="w-3.5 h-3.5 text-secondary" />
              <span>Click any photo to view in full resolution</span>
            </div>
          </div>
        </section>

        {/* GALLERY SECTIONS */}
        <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-3xl space-y-space-4xl">
          {filteredSections.map((section, sIndex) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-36 transition-opacity duration-300"
            >
              {/* Section Header */}
              <div data-aos="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl border-b border-surface-container pb-space-md gap-4">
                <div>
                  <h2 className="font-headline-md text-headline-md text-primary tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md font-light">
                  {section.description}
                </p>
              </div>

              {/* Dynamic Editorial Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-md lg:gap-space-lg">
                {section.images.map((img, i) => {
                  // Asymmetric layout logic for editorial richness
                  const isFirst = i === 0;
                  const isSecond = i === 1;

                  // First image gets a wide prominent 7-col or 8-col card in 12-col grid
                  let colSpanClass = "lg:col-span-4";
                  let heightClass = "h-[300px] sm:h-[340px]";

                  if (isFirst) {
                    colSpanClass = "lg:col-span-7";
                    heightClass = "h-[380px] sm:h-[440px]";
                  } else if (isSecond) {
                    colSpanClass = "lg:col-span-5";
                    heightClass = "h-[380px] sm:h-[440px]";
                  }

                  return (
                    <div
                      key={img.id}
                      data-aos="fade-up"
                      data-aos-delay={(i % 4) * 100}
                      onClick={() => openLightbox(img)}
                      className={`${colSpanClass} group relative bg-surface-container-low rounded-DEFAULT overflow-hidden cursor-pointer border border-outline-variant/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col`}
                    >
                      {/* Image Container */}
                      <div className={`relative w-full ${heightClass} overflow-hidden bg-surface-container`}>
                        <img
                          src={img.src}
                          alt={img.alt || img.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-space-md" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                          <span className="px-2.5 py-1 rounded-DEFAULT bg-surface/90 backdrop-blur-xs text-primary font-label-caps text-[10px] uppercase tracking-wider shadow-xs">
                            {img.tag}
                          </span>
                          <div className="w-7 h-7 rounded-full bg-primary/60 backdrop-blur-xs text-surface flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>

                      {/* Card Info Footer */}
                      <div className="p-space-md bg-surface-container-lowest flex-1 flex flex-col justify-between border-t border-surface-container">
                        <div className=" border-surface-container/60 flex items-center justify-between text-xs text-secondary font-label-caps uppercase">
                          <span>{section.title}</span>
                          <span className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-primary font-medium">
                            Enlarge <Maximize2 className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* CALL TO ACTION BANNER */}
        <section data-aos="fade-up" className="w-full bg-primary-container text-surface py-space-3xl relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10 flex flex-col md:flex-row items-center justify-between gap-space-xl">
            <div className="space-y-space-xs text-center md:text-left">
              <span className="font-label-caps text-label-caps uppercase text-secondary-container tracking-widest block">
                Experience Solcasa Firsthand
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-surface tracking-tight">
                Ready to Wake Up in the Mist?
              </h2>
              <p className="font-body-md text-surface/80 max-w-xl font-light">
                Reserve your secluded suite in Thalappuzha, Wayanad and experience tranquil mountain living.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-space-md">
              <a
                href={getWhatsAppLink("Hello SOLCASA Homestay! I was browsing through your gallery and would like to inquire about booking a stay.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-space-xl py-space-sm bg-surface text-primary rounded-DEFAULT font-label-ui text-label-ui uppercase tracking-widest hover:bg-secondary-container hover:text-on-secondary-fixed transition-all duration-300 shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book Your Stay
              </a>
              <Link
                href="/"
                className="px-space-lg py-space-sm border border-surface/30 text-surface rounded-DEFAULT font-label-ui text-label-ui uppercase tracking-widest hover:bg-surface/10 transition-colors"
              >
                Explore Homestay
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {currentLightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Bar Controls */}
          <div
            className="flex items-center justify-between text-surface z-10 w-full max-w-6xl mx-auto pt-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-label-caps uppercase tracking-wider text-secondary-container">
                {currentLightboxImage.tag}
              </span>
              <span className="text-xs text-surface/70 font-label-caps uppercase tracking-widest">
                {String(activeImageIndex + 1).padStart(2, "0")} / {String(displayedImages.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-surface/50 hidden sm:inline-block">
                Press [Esc] to close, [← / →] to navigate
              </span>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-surface transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Center Image with Next/Prev Controls */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 w-full max-w-6xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/50 hover:bg-white/20 text-surface backdrop-blur-sm transition-all duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <div className="relative max-h-[70vh] sm:max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-DEFAULT">
              <img
                src={currentLightboxImage.src}
                alt={currentLightboxImage.alt || currentLightboxImage.title}
                className="max-h-[70vh] sm:max-h-[75vh] max-w-full object-contain drop-shadow-2xl select-none"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-white/20 text-surface backdrop-blur-sm transition-all duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div
            className="w-full max-w-3xl mx-auto text-center pb-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-headline-sm text-xl sm:text-2xl text-surface">
              {currentLightboxImage.title}
            </h3>
            <p className="font-body-sm text-sm text-surface/75 mt-1 font-light max-w-xl mx-auto">
              {currentLightboxImage.caption}
            </p>
            {currentLightboxImage.location && (
              <div className="inline-flex items-center gap-1 text-[11px] text-secondary-container font-label-caps uppercase tracking-wider mt-2">
                <MapPin className="w-3 h-3" />
                {currentLightboxImage.location}
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
