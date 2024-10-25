import FeaturedWork from "./Components/FeaturedWork";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import RecentPosts from "./Components/RecentPost";


export default function Home() {
  return (
   <div>
      <HeroSection />
      <RecentPosts />
      <FeaturedWork />
      <Footer />
      </div>
  );
}