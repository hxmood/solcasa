"use client";

export default function WakeUpToGreen() {
  return (
    <section id="experience" className="w-full bg-surface-container-low py-space-4xl relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          {/* Left Visual Collage Lockup */}
          <div data-aos="fade-right" data-aos-duration="900" className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-DEFAULT overflow-hidden shadow-2xl">
              <img
                alt="Vast emerald green tea plantation hills bathed in golden morning light with mist"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDExmwJrXpLUAWIyq-0GOgzg8CsvbUT5fc35NaQt6mdf2q6VIcxp8RQDy-AMExKecUPpAeHbLR525Ak9--fPyhOnIceHo8bbBzlbwEMb978j4BXgfcj3L7mymIimXWGilz7SgRnHW5I7RjqSnyG2mcUNAR1ehi0Ve6YuuhJ2Qt1bIxoctsQCx4C1AGylatolfKmM3usaO8ccX4RzZOPUp_LgKmJZWRq0-VanzDxVNVUOOVPyWHXwnVS"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-transparent" />
              {/* Atmospheric Badge Overlay */}
              <div data-aos="zoom-in" data-aos-delay="200" className="absolute bottom-space-md left-space-md bg-surface/90 backdrop-blur-md p-space-md rounded-DEFAULT max-w-xs shadow-lg">
                <div className="flex items-center gap-space-xs text-secondary-fixed-dim">
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    wb_twilight
                  </span>
                  <span className="font-label-caps text-label-caps text-primary uppercase">
                    Morning Ritual
                  </span>
                </div>
                <p className="font-headline-sm text-[16px] text-primary italic mt-1">
                  &quot;Where the mist clears to reveal infinite undulating rows of hand-tended tea.&quot;
                </p>
              </div>
            </div>
            {/* Micro Spec Accent Pill */}
            <div data-aos="fade-up" data-aos-delay="300" className="hidden sm:flex absolute -bottom-6 right-8 bg-primary-container text-surface px-space-lg py-space-sm rounded-DEFAULT shadow-xl items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary-container">
                spa
              </span>
              <span className="font-label-caps text-label-caps tracking-widest uppercase text-surface">
                100% Plantation Air
              </span>
            </div>
          </div>

          {/* Right Content Narrative */}
          <div data-aos="fade-left" data-aos-duration="900" className="lg:col-span-6 space-y-space-lg lg:pl-space-md">
            <div className="space-y-space-xs">
              <span className="font-label-caps text-label-caps uppercase text-secondary tracking-[0.25em] block">
                Highland Rhythm
              </span>
              <h2 className="font-display-xl text-headline-lg lg:text-headline-lg text-primary tracking-tight">
                Wake Up to Green
              </h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed">
              At SOLCASA, nature is part of the experience. Start your morning
              with fresh mountain air and beautiful views. Spend your evenings
              surrounded by greenery as the atmosphere becomes calm and peaceful.
              From the refreshing mornings to the quiet evenings, every moment
              here is made for slowing down.
            </p>
            {/* Editorial Bullet Accents */}
            <div className="space-y-space-md pt-space-xs">
              <div data-aos="fade-up" data-aos-delay="150" className="flex items-start gap-space-md p-space-md bg-surface rounded-DEFAULT shadow-sm">
                <div className="w-10 h-10 rounded-full bg-secondary-container/40 flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    wb_sunny
                  </span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-[17px] text-primary">
                    Refreshing Mornings
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Savor fresh estate tea on your private deck while dawn mists
                    roll gently over the Western Ghats.
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="250" className="flex items-start gap-space-md p-space-md bg-surface rounded-DEFAULT shadow-sm">
                <div className="w-10 h-10 rounded-full bg-secondary-container/40 flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    nightlight_round
                  </span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-[17px] text-primary">
                    Quiet Evenings
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Wind down with the natural symphony of cicadas, gentle
                    highland breezes, and deep stillness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
