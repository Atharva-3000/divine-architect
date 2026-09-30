import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import CtaAndFooter from "@/components/CtaAndFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-light">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
      <Services />
      <CtaAndFooter />
    </main>
  );
}
