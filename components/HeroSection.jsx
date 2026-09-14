import { getWhatsAppLink } from "@/utils/whatsapp";

export default function HeroSection() {
  const whatsappHeroUrl = getWhatsAppLink(
    "Hello SOLCASA Homestay! I would like to book a stay and check room availability at your Wayanad homestay."
  );
  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center -mt-20 overflow-hidden">
      {/* Cinematic Full-width Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDExmwJrXpLUAWIyq-0GOgzg8CsvbUT5fc35NaQt6mdf2q6VIcxp8RQDy-AMExKecUPpAeHbLR525Ak9--fPyhOnIceHo8bbBzlbwEMb978j4BXgfcj3L7mymIimXWGilz7SgRnHW5I7RjqSnyG2mcUNAR1ehi0Ve6YuuhJ2Qt1bIxoctsQCx4C1AGylatolfKmM3usaO8ccX4RzZOPUp_LgKmJZWRq0-VanzDxVNVUOOVPyWHXwnVS')",
        }}
      />
      {/* Soft Botanical Ambient Scrim Overlays for Editorial Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/35 to-primary/50 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/80" />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop pt-32 pb-24 flex flex-col items-center text-center">
        {/* Overline Tag */}
        <div
          data-aos="fade-down"
          data-aos-duration="700"
          className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-DEFAULT bg-surface/10 backdrop-blur-md text-surface tracking-[0.28em] font-label-caps text-label-caps uppercase mb-space-lg shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse" />
          SOLCASA WAYANAD
        </div>

        {/* Main Headline */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="900"
          className="font-display-xl text-display-xl-mobile lg:text-display-xl text-surface max-w-4xl tracking-tight leading-tight mb-space-md drop-shadow-sm"
        >
          Stay Close to Nature.
          <br className="hidden sm:inline" />
          <span className="italic font-normal text-surface-container-high">
            Wake Up to the Mountains.
          </span>
        </h1>

        {/* Editorial Sub-lead */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="900"
          className="font-subheading-lg text-subheading-lg text-surface/90 max-w-2xl font-light tracking-wide mb-space-xl leading-relaxed"
        >
          A peaceful homestay surrounded by the beauty of Wayanad, where green
          tea plantations, misty mountains, fresh air, and a calm atmosphere come
          together.
        </p>

        {/* Primary & Secondary CTAs */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="900"
          className="flex flex-col sm:flex-row items-center justify-center gap-space-md w-full sm:w-auto mb-space-3xl"
        >
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center px-space-xl py-space-sm bg-primary-container text-surface font-label-ui text-label-ui uppercase tracking-[0.2em] rounded-DEFAULT hover:bg-primary transition-all duration-300 shadow-xl group"
            href={whatsappHeroUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Book Your Stay</span>
            <span className="material-symbols-outlined text-[18px] ml-space-xs transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center px-space-xl py-space-sm bg-surface/10 backdrop-blur-md text-surface font-label-ui text-label-ui uppercase tracking-[0.2em] rounded-DEFAULT hover:bg-surface/20 transition-all duration-300"
            href="#editorial-intro"
          >
            Explore SOLCASA
          </a>
        </div>

        {/* Floating Minimalist Reservation Bar */}
       
      </div>
    </section>
  );
}
