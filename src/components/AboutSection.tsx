import creatorAbout from "@/assets/creator-about.jpg";

const AboutSection = () => {
  return (
    <section className="section-padding bg-cream" id="about">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">
          About Me
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
            <img
              src={creatorAbout}
              alt="Reymark Biñas in studio"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-5">
            <p className="text-sm font-body tracking-[0.2em] uppercase text-muted-foreground">
              UGC Video Creator
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Reymark Biñas
            </h2>
            <div className="space-y-4 text-base font-body text-muted-foreground leading-relaxed">
              <p>
                Hi! I'm a UGC creator specializing in authentic product videos designed for TikTok, Instagram Reels, and paid social ads.
              </p>
              <p>
                I create engaging content for skincare, beauty, lifestyle products, and social media advertising.
              </p>
              <p>
                My goal is to help brands create authentic content that increases engagement and conversions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
