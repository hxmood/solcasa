"use client";

export default function EditorialIntro() {
  return (
    <section
      className="w-full max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-4xl"
      id="editorial-intro"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        {/* Narrative Left Block */}
        <div data-aos="fade-right" data-aos-duration="900" className="lg:col-span-5 flex flex-col space-y-space-md">
          <div className="inline-flex items-center gap-space-xs text-secondary font-label-caps text-label-caps uppercase tracking-[0.25em]">
            <span className="w-8 h-[1px] bg-secondary" />
            Sanctuary Perspective
          </div>

          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary tracking-tight">
            A Peaceful Stay in the Heart of Wayanad
          </h2>

          <div className="w-12 h-[2px] bg-secondary-container" />

          <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed pt-space-xs">
            Welcome to SOLCASA, a cozy homestay created for those who want to
            slow down, breathe fresh air, and enjoy the simple beauty of nature.
            Located near Thalappuzha, Wayanad, SOLCASA offers a relaxing escape
            surrounded by lush greenery, tea plantations, and mountain
            landscapes. Whether you&apos;re travelling as a couple, with family,
            or with friends, SOLCASA is a place to relax, reconnect, and enjoy
            Wayanad at your own pace.
          </p>

          {/* Signature Editorial Metadata */}
          <div className="pt-space-md grid grid-cols-2 gap-space-md">
            <div data-aos="fade-up" data-aos-delay="150" className="bg-surface-container-low p-space-md rounded-DEFAULT">
              <span className="font-label-caps text-label-caps text-secondary uppercase block">
                Location Coordinates
              </span>
              <span className="font-headline-sm text-[18px] text-primary mt-1 block">
                Thalappuzha Hills
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Elev. 950m • Wayanad
              </span>
            </div>
            <div data-aos="fade-up" data-aos-delay="250" className="bg-surface-container-low p-space-md rounded-DEFAULT">
              <span className="font-label-caps text-label-caps text-secondary uppercase block">
                Retreat Rhythm
              </span>
              <span className="font-headline-sm text-[18px] text-primary mt-1 block">
                Gentle • Slow
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Private Estate Suites
              </span>
            </div>
          </div>
        </div>

        {/* Asymmetric Dual Photo Gallery Lockup */}
        <div data-aos="fade-left" data-aos-duration="1000" className="lg:col-span-7 relative">
          <div className="grid grid-cols-12 gap-space-md items-end">
            {/* Master Suite Panorama Image */}
            <div className="col-span-8 overflow-hidden rounded-DEFAULT shadow-xl">
              <img
                alt="Warm sunlit luxury master bedroom at Solcasa overlooking misty highland forest canopy"
                className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGBvmGIOa_kP7KZs2gwLQL9EEd6bipDxtRUyA0YmE5ilSNxMWl75GTLr5GHOzTUpzzyIvlGFYcdgk5MpUwn--UK9519sukLZlu1ua-9Gu7kePjE4nPIK56RrMIrfaNlwoBeTaj3oNSbR-sWgS33LfG6cD1pN3cpCU7rlGjzcddzL5ke28fBC6JUcgcJnlaYSwG89k979CI3jH7LaI_NLT0XnCw09RUCut8a9TOwHunfOQrIqxtTfZf"
              />
              <div className="p-space-sm bg-surface-container-lowest flex justify-between items-center text-on-surface-variant">
                <span className="font-label-caps text-label-caps text-primary uppercase">
                  The Forest Suite
                </span>
                <span className="font-body-sm text-body-sm italic">
                  Morning Light Over Canopy
                </span>
              </div>
            </div>

            {/* Verandah Balcony Overlap Image */}
            <div data-aos="zoom-in" data-aos-delay="200" className="col-span-4 -ml-space-md mb-space-lg relative z-10 shadow-2xl overflow-hidden rounded-DEFAULT bg-surface">
              <img
                alt="Artisanal wooden balcony verandah with steamy mountain tea, journal and panoramic plantation view"
                className="w-full h-[320px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJengo38m4ckhiYHFPpahZuABMFo9vUXQ1t63z1zT6fIWuBHDtgllN1DzvqJii9tgb0KI5DGuIkLWHNQAb22vHruOnYkbyrHxdtapCOjxkO3z2ArYUrYzwqYqfNUIyY5fMTL_gRm6oh6qZHrs-ms7e4W0ZsWx-snc8oTZItQTLylBsC4VNvg7u1v9Hpq7zEcb2c8Nww22b3ux0i3gtw6EGNC3hBBU4tU-KpFFUWmRXlSDhh-S34a9x"
              />
              <div className="p-space-xs bg-surface-container-low text-center">
                <span className="font-label-caps text-[10px] text-secondary tracking-widest uppercase">
                  The Sunrise Verandah
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
