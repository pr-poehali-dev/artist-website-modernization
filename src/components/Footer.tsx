import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", icon: "Instagram", url: "#" },
    { name: "TikTok", icon: "Music", url: "#" },
    { name: "ВКонтакте", icon: "MessageCircle", url: "#" },
    { name: "YouTube", icon: "Youtube", url: "#" },
    { name: "Telegram", icon: "Send", url: "#" },
  ];

  const musicPlatforms = [
    { name: "Яндекс.Музыка", icon: "Music", url: "#" },
    { name: "Spotify", icon: "Music2", url: "#" },
    { name: "Apple Music", icon: "Music3", url: "#" },
    { name: "YouTube Music", icon: "Youtube", url: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-montserrat font-bold music-text-gradient">
              АРТИСТ
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Создаю музыку, которая вдохновляет и объединяет людей. Каждый трек
              — это история, каждый бит — эмоция.
            </p>

            {/* Donation Button */}
            <Button className="music-button w-full sm:w-auto">
              <Icon name="Heart" className="mr-2 h-5 w-5" />
              Поддержать донатом
            </Button>
          </div>

          {/* Music Platforms */}
          <div className="space-y-6">
            <h4 className="text-lg font-montserrat font-semibold">
              Слушать музыку
            </h4>
            <div className="space-y-3">
              {musicPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  className="flex items-center gap-3 text-gray-400 hover:text-music-purple transition-colors group"
                >
                  <Icon
                    name={platform.icon as any}
                    className="h-5 w-5 group-hover:scale-110 transition-transform"
                  />
                  {platform.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Networks */}
          <div className="space-y-6">
            <h4 className="text-lg font-montserrat font-semibold">
              Социальные сети
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="flex items-center gap-3 text-gray-400 hover:text-music-pink transition-colors group"
                >
                  <Icon
                    name={social.icon as any}
                    className="h-5 w-5 group-hover:scale-110 transition-transform"
                  />
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Icon name="Mail" className="h-5 w-5" />
              <span>booking@artist.music</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Icon name="Phone" className="h-5 w-5" />
              <span>+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Icon name="MapPin" className="h-5 w-5" />
              <span>Москва, Россия</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Артист. Все права защищены.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-music-purple transition-colors">
              Пользовательское соглашение
            </a>
            <a href="#" className="hover:text-music-purple transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>

        {/* Built with love */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
            Сделано с <Icon name="Heart" className="h-4 w-4 text-red-500" /> в
            Поехали!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
