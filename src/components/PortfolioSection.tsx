import { Play } from "lucide-react";
import thumbnailSkincare from "@/assets/thumbnail-skincare.jpg";
import thumbnailMotion from "@/assets/thumbnail-motion.jpg";
import thumbnailPodcast from "@/assets/thumbnail-podcast.jpg";
import thumbnailStorytelling from "@/assets/thumbnail-storytelling.jpg";

const VideoThumbnail = ({ src, label }: { src: string; label?: string }) => (
  <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer card-hover">
    <img src={src} alt={label || "Video thumbnail"} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
      <div className="w-14 h-14 rounded-full bg-card/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
        <Play size={22} className="text-foreground ml-1" />
      </div>
    </div>
    {label && (
      <div className="absolute bottom-3 left-3 right-3">
        <span className="text-xs font-body bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-foreground">
          {label}
        </span>
      </div>
    )}
  </div>
);

const ImageThumbnail = ({ src, label }: { src: string; label?: string }) => (
  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden card-hover">
    <img src={src} alt={label || "Image"} className="w-full h-full object-cover" />
    {label && (
      <div className="absolute bottom-3 left-3 right-3">
        <span className="text-xs font-body bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-foreground">
          {label}
        </span>
      </div>
    )}
  </div>
);

const PortfolioSection = () => {
  return (
    <section className="section-padding bg-cream" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">
          My Work
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-14">
          Featured Work
        </h2>

        {/* Skincare Ad Concept */}
        <div className="mb-16">
          <h3 className="text-xl font-display font-semibold text-foreground mb-6">
            Skincare Ad Concept
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <VideoThumbnail key={i} src={thumbnailSkincare} label={`Skincare Ad ${i}`} />
            ))}
          </div>
        </div>

        {/* Motion Control */}
        <div className="mb-16">
          <h3 className="text-xl font-display font-semibold text-foreground mb-6">
            Motion Control
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <VideoThumbnail src={thumbnailMotion} label="Motion Source" />
            <ImageThumbnail src={thumbnailSkincare} label="Original Image" />
            <VideoThumbnail src={thumbnailMotion} label="Generated Motion" />
          </div>
        </div>

        {/* Podcast Style */}
        <div className="mb-16">
          <h3 className="text-xl font-display font-semibold text-foreground mb-6">
            Podcast Style
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <VideoThumbnail src={thumbnailPodcast} label="Podcast Style" />
          </div>
        </div>

        {/* Storytelling */}
        <div>
          <h3 className="text-xl font-display font-semibold text-foreground mb-6">
            Storytelling
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <VideoThumbnail src={thumbnailStorytelling} label="Storytelling" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
