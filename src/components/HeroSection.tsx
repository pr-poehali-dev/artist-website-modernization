import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 music-gradient opacity-90"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse-soft"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse-soft delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse-soft delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-pulse-soft delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in">
          {/* Artist Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face"
                  alt="Артист"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 animate-pulse-soft"></div>
            </div>
          </div>

          {/* Artist Name */}
          <h1 className="text-5xl sm:text-7xl font-montserrat font-bold mb-6 tracking-tight">
            АРТИСТ
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl font-open-sans font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Создаю музыку, которая вдохновляет и объединяет людей. Каждый трек —
            это история, каждый бит — эмоция.
          </p>

          {/* Music genres tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["Hip-Hop", "R&B", "Pop", "Electronic"].map((genre) => (
              <span
                key={genre}
                className="glass-card px-4 py-2 rounded-full text-sm font-medium"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="music-button text-lg px-8 py-4">
              <Icon name="Play" className="mr-2 h-5 w-5" />
              Слушать музыку
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4"
            >
              <Icon name="Heart" className="mr-2 h-5 w-5" />
              Поддержать донатом
            </Button>
          </div>

          {/* Social stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold">250K+</div>
              <div className="text-sm opacity-80">Слушателей</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">15</div>
              <div className="text-sm opacity-80">Треков</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50M+</div>
              <div className="text-sm opacity-80">Прослушиваний</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;
