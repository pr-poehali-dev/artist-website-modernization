import HeroSection from "@/components/HeroSection";
import ReleasesSection from "@/components/ReleasesSection";
import AboutSection from "@/components/AboutSection";
import SocialNewsSection from "@/components/SocialNewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ReleasesSection />
      <AboutSection />
      <SocialNewsSection />
      <Footer />
    </div>
  );
};

export default Index;
