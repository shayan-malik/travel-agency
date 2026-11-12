import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Destinations from "@/components/sections/Destinations";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Destinations />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
}