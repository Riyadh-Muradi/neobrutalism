import BentoGrid from "@/pages/sections/BentoGrid";
import CMS from "@/pages/sections/CMS";
import FAQ from "@/pages/sections/FAQ";
import Hero from "@/pages/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Hero />
      <CMS />
      <BentoGrid />
      <FAQ />
    </div>
  );
}
