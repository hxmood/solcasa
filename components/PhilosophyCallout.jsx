"use client";

export default function PhilosophyCallout() {
  return (
    <section className="w-full bg-primary-container text-surface py-space-4xl relative overflow-hidden">
      {/* Subtle architectural texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary opacity-80" />
      <div className="relative z-10 max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div data-aos="zoom-in" data-aos-duration="900" className="max-w-3xl mx-auto text-center space-y-space-lg">
          <div className="inline-flex items-center gap-space-xs text-secondary-container font-label-caps text-label-caps uppercase tracking-[0.25em]">
            <span>Est. Wayanad Highlands</span>
            <span>•</span>
            <span>Slow Living Charter</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-surface font-light tracking-wide">
            Your Home Away From Home
          </h3>
          <p className="font-body-lg text-body-lg text-surface/85 font-light leading-relaxed max-w-xl mx-auto">
            SOLCASA is designed to give you a comfortable and peaceful stay
            while keeping you close to nature.
          </p>
          <div className="w-16 h-[1px] bg-secondary-container/40 mx-auto my-space-md" />
          {/* Grand Editorial Triple Mantra */}
          <blockquote className="font-display-xl text-display-xl-mobile lg:text-[46px] leading-[1.25] text-surface font-normal italic tracking-tight py-space-sm">
            &quot;Come for the views.
            <br />
            Stay for the peace.
            <br />
            Leave with memories.&quot;
          </blockquote>
          <div className="pt-space-md">
            <a
              className="inline-flex items-center justify-center px-space-xl py-space-sm bg-surface text-primary font-label-ui text-label-ui uppercase tracking-[0.2em] rounded-DEFAULT hover:bg-surface-container-low transition-colors shadow-lg"
              href="#stay-with-us"
            >
              Reserve Your Haven
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
