"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EditorialIntro from "@/components/EditorialIntro";
import WakeUpToGreen from "@/components/WakeUpToGreen";
import WhySolcasa from "@/components/WhySolcasa";
import GalleryPreviewSection from "@/components/GalleryPreviewSection";
import PhilosophyCallout from "@/components/PhilosophyCallout";
import ExploreWayanad from "@/components/ExploreWayanad";
import GettingHere from "@/components/GettingHere";
import StayWithUs from "@/components/StayWithUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full max-w-full pt-20 bg-surface min-h-screen overflow-x-hidden">
        <div className="flex flex-col w-full max-w-full text-on-surface overflow-x-hidden">
          {/* 1. HERO SECTION */}
          <HeroSection />

          {/* 2. EDITORIAL INTRO: ASYMMETRIC GALLERY & NARRATIVE */}
          <EditorialIntro />

          {/* 3. IMMERSIVE FEATURE: WAKE UP TO GREEN */}
          <WakeUpToGreen />

          {/* 4. WHY SOLCASA (PILLARS OF SERENITY GRID) */}
          <WhySolcasa />

          {/* 5. RESORT VISUALS & MOMENTS PREVIEW */}
          <GalleryPreviewSection />

          {/* 6. PHILOSOPHY / POETIC CALLOUT */}
          <PhilosophyCallout />

          {/* 7. EXPLORE WAYANAD */}
          <ExploreWayanad />

          {/* 8. GETTING HERE & MOUNTAIN ACCESS */}
          <GettingHere />

          {/* 9. STAY WITH US (GRAND FINALE & BOOKING CALLOUT) */}
          <StayWithUs />
        </div>
      </main>
      <Footer />
    </>
  );
}
