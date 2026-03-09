import { Video, User, Sparkles, Move3D, Heart, Mic } from "lucide-react";

const services = [
  { icon: Video, title: "Short-form Videos" },
  { icon: User, title: "Talking Head UGC" },
  { icon: Sparkles, title: "Skincare Routine Videos" },
  { icon: Move3D, title: "Motion Control Content" },
  { icon: Heart, title: "Lifestyle UGC" },
  { icon: Mic, title: "Podcast Style Content" },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background" id="services">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">
          What I Do
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-14">
          Content I Create
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-2xl p-8 card-hover border border-border/50 group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon size={22} />
              </div>
              <h3 className="text-lg font-body font-semibold text-foreground">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
