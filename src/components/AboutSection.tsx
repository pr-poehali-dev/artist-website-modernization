import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-music-purple via-music-pink to-music-orange"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold mb-8 music-text-gradient">
              О себе
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                Привет! Меня зовут{" "}
                <span className="text-music-purple font-semibold">Артист</span>,
                и я создаю музыку уже более 5 лет. Мой путь начался в маленькой
                студии, где я экспериментировал со звуками и ритмами.
              </p>

              <p>
                Моя музыка — это смесь современного хип-хопа, R&B и электронных
                элементов. Я верю, что каждая песня должна рассказывать историю
                и вызывать эмоции.
              </p>

              <p>
                За эти годы я выпустил 15 треков, которые набрали более 50
                миллионов прослушиваний. Моя цель — создавать музыку, которая
                вдохновляет людей и помогает им в трудные моменты.
              </p>
            </div>

            {/* Achievements */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10 p-6 text-center">
                <Icon
                  name="Award"
                  className="h-8 w-8 text-music-purple mx-auto mb-3"
                />
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm text-gray-400">Лет опыта</div>
              </Card>

              <Card className="bg-white/5 border-white/10 p-6 text-center">
                <Icon
                  name="Users"
                  className="h-8 w-8 text-music-pink mx-auto mb-3"
                />
                <div className="text-2xl font-bold text-white">250K+</div>
                <div className="text-sm text-gray-400">Фанатов</div>
              </Card>
            </div>
          </div>

          {/* Image Grid */}
          <div className="animate-scale-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=400&fit=crop"
                  alt="Студия записи"
                  className="w-full h-48 object-cover rounded-lg shadow-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
                  alt="Концерт"
                  className="w-full h-32 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1485579149621-3123dd979885?w=300&h=300&fit=crop"
                  alt="За работой"
                  className="w-full h-32 object-cover rounded-lg shadow-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=400&fit=crop"
                  alt="Выступление"
                  className="w-full h-48 object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Genres */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-montserrat font-bold mb-8 text-white">
            Мои музыкальные направления
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Hip-Hop Production",
              "Vocal Recording",
              "Beat Making",
              "Mixing & Mastering",
              "R&B Songwriting",
              "Electronic Music",
            ].map((skill) => (
              <span
                key={skill}
                className="glass-card px-6 py-3 rounded-full text-sm font-medium text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
