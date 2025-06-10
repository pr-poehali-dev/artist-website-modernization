import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const releases = [
  {
    id: 1,
    title: "Новая высота",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    releaseDate: "2024",
    duration: "3:42",
    plays: "2.5M",
  },
  {
    id: 2,
    title: "Без границ",
    cover:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    releaseDate: "2024",
    duration: "4:15",
    plays: "1.8M",
  },
  {
    id: 3,
    title: "Полёт",
    cover:
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=300&h=300&fit=crop",
    releaseDate: "2023",
    duration: "3:28",
    plays: "3.1M",
  },
  {
    id: 4,
    title: "Ритм города",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    releaseDate: "2023",
    duration: "3:55",
    plays: "4.2M",
  },
];

const ReleasesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold mb-6 music-text-gradient">
            Последние релизы
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Новые треки и хиты, которые покорили сердца миллионов слушателей
          </p>
        </div>

        {/* Releases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {releases.map((release, index) => (
            <Card
              key={release.id}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up border-none shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={release.cover}
                  alt={release.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="icon"
                    className="rounded-full bg-white/90 text-black hover:bg-white"
                  >
                    <Icon name="Play" className="h-6 w-6" />
                  </Button>
                </div>
                <div className="absolute top-3 right-3 glass-card px-2 py-1 rounded text-xs text-white">
                  {release.plays}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-montserrat font-semibold text-lg mb-2 group-hover:text-music-purple transition-colors">
                  {release.title}
                </h3>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{release.releaseDate}</span>
                  <span>{release.duration}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Streaming Platforms */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">Слушайте на всех платформах:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Яндекс.Музыка", icon: "Music" },
              { name: "Spotify", icon: "Music2" },
              { name: "Apple Music", icon: "Music3" },
              { name: "YouTube Music", icon: "Youtube" },
            ].map((platform) => (
              <Button
                key={platform.name}
                variant="outline"
                className="flex items-center gap-2 hover:bg-music-purple hover:text-white transition-colors"
              >
                <Icon name={platform.icon as any} className="h-4 w-4" />
                {platform.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReleasesSection;
