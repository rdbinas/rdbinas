import { BookOpen, Smartphone, Target, Eye, Zap } from "lucide-react";

const reasons = [
  { icon: BookOpen, title: "Authentic storytelling" },
  { icon: Smartphone, title: "Native TikTok style content" },
  { icon: Target, title: "Optimized for paid social ads" },
  { icon: Eye, title: "High engagement visuals" },
  { icon: Zap, title: "Fast turnaround" },
];

const WhyBrandsSection = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Why Me
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-14">
          Why Brands Choose<br />My Content
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-card rounded-2xl p-8 border border-border/50 card-hover group text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <reason.icon size={24} />
              </div>
              <h3 className="text-base font-body font-semibold text-foreground">
                {reason.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBrandsSection;
