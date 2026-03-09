import { Youtube, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import creatorHero from "@/assets/creator-hero.jpg";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z" />
  </svg>
);

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding bg-background">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <div className="space-y-6 animate-fade-up">
          <p className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-foreground">
            Reymark<br />Biñas
          </h1>
          <p className="text-lg font-body font-medium text-foreground/80">
            UGC Content Creator
          </p>
          <p className="text-base font-body text-muted-foreground max-w-md leading-relaxed">
            Authentic product videos designed to convert for TikTok, Instagram Reels, and paid social ads.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-2">
            {[
              { icon: <Youtube size={20} />, label: "YouTube" },
              { icon: <Instagram size={20} />, label: "Instagram" },
              { icon: <Facebook size={20} />, label: "Facebook" },
              { icon: <TikTokIcon />, label: "TikTok" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <Button
            size="lg"
            className="mt-4 rounded-full px-8 font-body"
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
        </div>

        {/* Image */}
        <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={creatorHero}
              alt="Reymark Biñas - UGC Content Creator"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-accent/60 -z-10" />
          <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-secondary/40 -z-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
