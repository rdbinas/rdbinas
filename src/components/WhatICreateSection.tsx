import { Check } from "lucide-react";

const items = [
  "UGC Product Ads",
  "TikTok & Reels Content",
  "Product Demonstrations",
  "Skincare Routines",
  "Lifestyle Product Videos",
  "Scripted Ad Creatives",
];

const WhatICreateSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">
          For Brands
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-14">
          What I Can Create<br />for Brands
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 bg-card rounded-2xl p-6 border border-border/50 card-hover"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Check size={18} className="text-foreground" />
              </div>
              <span className="font-body font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatICreateSection;
