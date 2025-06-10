import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const socialPosts = [
  {
    id: 1,
    platform: "TikTok",
    content:
      'Новый трек "Без границ" уже набрал 500K просмотров! 🚀 Спасибо за поддержку!',
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop",
    timestamp: "2 часа назад",
    likes: "12.5K",
    icon: "Music",
  },
  {
    id: 2,
    platform: "VK",
    content:
      "Работаю над новым альбомом в студии. Скоро поделюсь превью треков!",
    image:
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400&h=300&fit=crop",
    timestamp: "5 часов назад",
    likes: "8.2K",
    icon: "MessageCircle",
  },
  {
    id: 3,
    platform: "TikTok",
    content: "Закулисье съёмок нового клипа. Команда работает на полную! 🎬",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    timestamp: "1 день назад",
    likes: "25.1K",
    icon: "Video",
  },
  {
    id: 4,
    platform: "VK",
    content:
      "Благодарю всех, кто был на концерте в Москве! Невероятная энергия зала! 💫",
    image:
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop",
    timestamp: "3 дня назад",
    likes: "15.7K",
    icon: "Mic",
  },
];

const SocialNewsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold mb-6 music-text-gradient">
            Новости из соцсетей
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Следите за последними обновлениями в TikTok и ВКонтакте
          </p>
        </div>

        {/* Social Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {socialPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-up border-none shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Post Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={`${post.platform} post`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div
                    className={`p-2 rounded-full ${post.platform === "TikTok" ? "bg-black" : "bg-blue-600"}`}
                  >
                    <Icon
                      name={post.icon as any}
                      className="h-4 w-4 text-white"
                    />
                  </div>
                  <span className="glass-card px-3 py-1 rounded-full text-sm font-medium text-white">
                    {post.platform}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <p className="text-gray-800 mb-4 leading-relaxed">
                  {post.content}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.timestamp}</span>
                  <div className="flex items-center gap-1">
                    <Icon name="Heart" className="h-4 w-4 text-red-500" />
                    <span className="font-medium">{post.likes}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">Подписывайтесь на мои соцсети:</p>
          <div className="flex justify-center gap-4">
            <Button className="music-button">
              <Icon name="Music" className="mr-2 h-5 w-5" />
              TikTok
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
              ВКонтакте
            </Button>
          </div>
        </div>

        {/* Auto-update notice */}
        <div className="mt-12 text-center">
          <Card className="bg-white/60 border-music-purple/20 p-6 max-w-md mx-auto">
            <Icon
              name="Zap"
              className="h-8 w-8 text-music-purple mx-auto mb-3"
            />
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Автообновление:</span> Новости
              обновляются каждые 15 минут
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialNewsSection;
