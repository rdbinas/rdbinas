import { Youtube, Instagram, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z" />
  </svg>
);

const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <p className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground">
          Get in Touch
        </p>
        <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground">
          Reymark Biñas
        </h2>
        <p className="text-2xl md:text-3xl font-display font-semibold text-foreground/80">
          LET'S CONNECT
        </p>

        {/* Social buttons */}
        <div className="flex items-center justify-center gap-4 pt-4">
          {[
            { icon: <Instagram size={20} />, label: "Instagram" },
            { icon: <TikTokIcon />, label: "TikTok" },
            { icon: <Youtube size={20} />, label: "YouTube" },
            { icon: <Facebook size={20} />, label: "Facebook" },
          ].map((social) => (
            <a
              key={social.label}
              href="#"
              aria-label={social.label}
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <Button
          variant="outline"
          size="lg"
          className="rounded-full px-8 font-body gap-2"
        >
          <Mail size={18} />
          Email Me
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
