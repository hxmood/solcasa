"use client";

export default function ExploreWayanad() {
  const destinations = [
    {
      icon: "filter_hdr",
      badge: "Nearby Viewpoint",
      title: "Muneeshwaran Hills",
      desc: "Panoramic high ridge trails and sweeping valley cloudscapes.",
      tag: "Trekking & Views",
      distance: "~3.6 km",
    },
    {
      icon: "park",
      badge: "Botanical",
      title: "Komachi Park",
      desc: "Manicured gardens, peaceful tree groves, and quiet walking paths.",
      tag: "Gentle Stroll",
      distance: "~6.3 km",
    },
    {
      icon: "cruelty_free",
      badge: "Wildlife Reserve",
      title: "Tholpetty Wildlife Sanctuary",
      desc: "Wild elephants, leopards, deer, and rich jungle biodiversity.",
      tag: "Jeep Safari",
      distance: "~34 km",
    },
    {
      icon: "water",
      badge: "Earthen Dam",
      title: "Banasura Sagar Dam",
      desc: "India's largest earthen dam nestled beneath dramatic peaks.",
      tag: "Speedboating",
      distance: "~31 km",
    },
    {
      icon: "kayaking",
      badge: "Freshwater Lake",
      title: "Pookode Lake",
      desc: "Natural freshwater lake enveloped in evergreen forest foliage.",
      tag: "Paddle Boating",
      distance: "~53.3 km",
    },
    {
      icon: "landscape",
      badge: "Highest Summit",
      title: "Chembra Peak",
      desc: "Legendary heart-shaped lake resting amidst cloud forests.",
      tag: "High Trekking",
      distance: "~62.9 km",
    },
    {
      icon: "history_edu",
      badge: "Prehistoric Site",
      title: "Edakkal Caves",
      desc: "Ancient Neolithic petroglyphs carved on high stone cliff faces.",
      tag: "Archaeology",
      distance: "~52 km",
    },
    {
      icon: "waves",
      badge: "Cascade",
      title: "Soochipara Waterfalls",
      desc: "Thundering three-tiered falls with secluded rock pools.",
      tag: "Forest Swim",
      distance: "~63.8 km",
    },
    {
      icon: "sailing",
      badge: "River Islet",
      title: "Kuruva Island",
      desc: "Dense protected delta archipelago on the pristine Kabini river.",
      tag: "Bamboo Rafting",
      distance: "~30.3 km",
    },
    {
      icon: "visibility",
      badge: "Rainforest Bridge",
      title: "900 Kandi",
      desc: "Panoramic glass skywalk suspended over deep wild jungle ravines.",
      tag: "Skywalk & Off-road",
      distance: "~61.7 km",
    },
  ];

  return (
    <section
      id="explore-wayanad"
      className="w-full max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-4xl"
    >
      <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end mb-space-3xl">
        <div className="lg:col-span-7 space-y-space-xs">
          <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-DEFAULT bg-secondary-container/50 text-primary font-label-caps text-label-caps uppercase tracking-[0.2em]">
            <span className="material-symbols-outlined text-[15px]">explore</span>
            Curated Highland Expeditions
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary tracking-tight">
            Explore Wayanad
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed pt-space-xs">
            Wayanad is more than just a destination. It&apos;s a place of
            mountains, forests, waterfalls, plantations, wildlife, and
            unforgettable landscapes. From SOLCASA, you can explore the natural
            beauty and attractions of Wayanad while returning to a peaceful place
            to relax at the end of the day.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-delay="100" className="lg:col-span-5 flex flex-col sm:items-end">
          <div className="inline-flex items-center gap-space-sm bg-surface-container p-space-md rounded-DEFAULT shadow-sm">
            <span className="material-symbols-outlined text-primary text-[24px]">
              nature_people
            </span>
            <div>
              <span className="font-label-caps text-label-caps text-secondary uppercase block">
                Sanctuary Ethos
              </span>
              <span className="font-headline-sm text-[18px] text-primary font-medium tracking-wide">
                Adventure outside. Peace inside.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Curated Places to Explore Grid (10 Destination Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-md">
        {destinations.map((item, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={(idx % 5) * 80}
            className="bg-surface-container-lowest p-space-md rounded-DEFAULT shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div className="space-y-space-xs">
              <div className="flex justify-between items-center text-secondary">
                <span className="material-symbols-outlined text-[20px]">
                  {item.icon}
                </span>
                <span className="font-label-caps text-[10px] uppercase tracking-wider">
                  {item.badge}
                </span>
              </div>
              <h4 className="font-headline-sm text-[17px] text-primary group-hover:text-secondary transition-colors">
                {item.title}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light">
                {item.desc}
              </p>
            </div>
            <div className="pt-space-md flex items-center justify-between font-label-caps text-[10px] text-outline uppercase">
              <span>{item.tag}</span>
              <span className="text-primary font-medium">{item.distance}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
