"use client";

export default function WhySolcasa() {
  const pillars = [
    {
      icon: "🌿",
      title: "Surrounded by Nature",
      description:
        "Enjoy the peaceful surroundings, greenery, tea plantations, and fresh mountain air.",
      num: "01",
    },
    {
      icon: "⛰️",
      title: "Mountain Ambience",
      description:
        "Experience the cool and refreshing atmosphere of the Wayanad hills.",
      num: "02",
    },
    {
      icon: "🏡",
      title: "Comfortable Stay",
      description:
        "A simple, cozy space designed for a relaxing and comfortable stay.",
      num: "03",
    },
    {
      icon: "☕",
      title: "Slow Mornings",
      description:
        "Enjoy peaceful mornings with a warm cup of tea while taking in the natural surroundings.",
      num: "04",
    },
    {
      icon: "🌅",
      title: "Peaceful Evenings",
      description:
        "Relax and enjoy the calm atmosphere as the day comes to an end.",
      num: "05",
    },
    {
      icon: "🤍",
      title: "Personal Hospitality",
      description:
        "We believe a good stay is not only about the place, but also about making guests feel welcome.",
      num: "06",
    },
  ];

  return (
    <section
      id="why-solcasa"
      className="w-full max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-4xl"
    >
      <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-space-3xl">
        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.25em] block mb-space-xs">
          The Distinctive Experience
        </span>
        <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary tracking-tight">
          Why SOLCASA?
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs font-light">
          A sanctuary thoughtfully curated to balance raw untouched wilderness
          with tranquil residential warmth.
        </p>
      </div>

      {/* 6 Clean Architectural Editorial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="bg-surface-container-lowest p-space-xl rounded-DEFAULT shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-DEFAULT bg-surface-container-low flex items-center justify-center text-primary mb-space-lg group-hover:bg-primary group-hover:text-surface transition-colors duration-300">
                <span className="text-2xl">{pillar.icon}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                {pillar.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
            <div className="mt-space-lg pt-space-xs flex items-center gap-space-xs text-secondary font-label-caps text-[10px] tracking-widest uppercase">
              <span>Sanctuary Pillar {pillar.num}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
