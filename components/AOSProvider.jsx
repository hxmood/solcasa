"use client";

import { useEffect } from "react";
import AOS from "aos";
import Lenis from "lenis";

export default function AOSProvider({ children }) {
  useEffect(() => {
    // 1. Initialize AOS Scroll Animations
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: false,
      offset: 60,
      delay: 50,
    });

    // 2. Initialize Lenis Momentum Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Sync Lenis scroll with AOS animation triggers
    lenis.on("scroll", () => {
      AOS.refresh();
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Refresh on DOM/resource load
    const handleLoad = () => {
      AOS.refresh();
    };

    window.addEventListener("load", handleLoad);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", handleLoad);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
