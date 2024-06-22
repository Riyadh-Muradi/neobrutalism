import { CMS } from "@/pages/sections/CMS";
import { FAQ } from "@/pages/sections/FAQ";
import { Hero } from "@/pages/sections/Hero";
import { Section } from "@/pages/sections/Section";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Hero />
      <CMS />
      <Section />
      <FAQ />
    </div>
  );
}
