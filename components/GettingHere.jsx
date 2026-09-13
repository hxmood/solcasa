"use client";

export default function GettingHere() {
  return (
    <section id="getting-here" className="w-full bg-surface-container py-space-4xl">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          {/* Left: Editorial Route Narrative */}
          <div data-aos="fade-right" data-aos-duration="900" className="lg:col-span-6 space-y-space-lg">
            <div className="space-y-space-xs">
              <span className="font-label-caps text-label-caps uppercase text-secondary tracking-[0.25em] block">
                Directions &amp; Mountain Access
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary tracking-tight">
                Getting Here
              </h2>
            </div>
            <div className="bg-surface-container-lowest p-space-xl rounded-DEFAULT shadow-sm space-y-space-md">
              <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed">
                SOLCASA is located near Thalappuzha, Wayanad. Public
                transportation is available up to Thalappuzha. From
                Thalappuzha, SOLCASA is approximately 2 km away and the final
                stretch requires a private vehicle. Guests can arrange an auto
                or contact us in advance for assistance with pickup.
              </p>
              {/* Route Milestones Breakdown */}
              <div className="space-y-space-sm pt-space-xs">
                <div data-aos="fade-up" data-aos-delay="100" className="flex items-center gap-space-md">
                  <span className="w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center font-label-caps text-[11px] text-primary font-bold">
                    1
                  </span>
                  <div>
                    <span className="font-headline-sm text-[15px] text-primary block">
                      Major Transit to Thalappuzha
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Regular KSRTC buses and connecting transit to Thalappuzha
                      town.
                    </span>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className="flex items-center gap-space-md">
                  <span className="w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center font-label-caps text-[11px] text-primary font-bold">
                    2
                  </span>
                  <div>
                    <span className="font-headline-sm text-[15px] text-primary block">
                      Final 2 km Estate Approach
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Scenic highland gravel trail winding up through lush
                      plantations.
                    </span>
                  </div>
                </div>
              </div>
              {/* Assistance Badge */}
              <div data-aos="fade-up" data-aos-delay="250" className="p-space-md bg-surface-container-low rounded-DEFAULT flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    airport_shuttle
                  </span>
                  <span className="font-label-caps text-label-caps text-primary uppercase">
                    Complimentary Pickup Assistance
                  </span>
                </div>
                <span className="font-label-ui text-label-ui text-secondary font-semibold">
                  Available on Request
                </span>
              </div>
              <div className="pt-space-xs flex flex-wrap gap-space-md">
                <a
                  className="inline-flex items-center justify-center px-space-lg py-space-sm bg-primary text-on-primary font-label-ui text-label-ui uppercase tracking-[0.18em] rounded-DEFAULT hover:bg-primary-container transition-colors shadow-sm"
                  href="https://maps.app.goo.gl/4FXwNy4jroKkoH9d6"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px] mr-2">
                    directions
                  </span>
                  Get Directions
                </a>
                <a
                  className="inline-flex items-center justify-center px-space-lg py-space-sm bg-surface-container text-primary font-label-ui text-label-ui uppercase tracking-[0.18em] rounded-DEFAULT hover:bg-surface-container-high transition-colors"
                  href="tel:+914936284100"
                >
                  <span className="material-symbols-outlined text-[18px] mr-2">
                    call
                  </span>
                  Call Estate Concierge
                </a>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" className="lg:col-span-6">
            <div className="relative w-full h-[480px] rounded-DEFAULT overflow-hidden shadow-xl bg-surface-container-highest">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3930.2335209110743!2d75.95117567505794!3d11.848451588373178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDUwJzU0LjQiTiA3NcKwNTcnMTMuNSJF!5e1!3m2!1sen!2sin!4v1789139526651!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="SOLCASA Wayanad Location Map"
              />
              {/* Floating Overlay Card for Quick Pin */}
              <div data-aos="zoom-in" data-aos-delay="200" className="absolute bottom-space-lg left-space-lg right-space-lg bg-surface/95 backdrop-blur-md p-space-md rounded-DEFAULT shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-full bg-primary text-surface flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">
                      pin_drop
                    </span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-[16px] text-primary block font-medium">
                      SOLCASA Wayanad
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Near Thalappuzha Junction • 2 km ascent
                    </span>
                  </div>
                </div>
                <span className="hidden sm:inline-block font-label-caps text-label-caps text-secondary uppercase bg-secondary-container/40 px-space-sm py-1 rounded-DEFAULT">
                  Pinpoint Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
