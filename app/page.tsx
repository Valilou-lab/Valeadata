import { ChatbotPromo } from "@/components/sections/ChatbotPromo";
import { Commitments } from "@/components/sections/Commitments";
import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";
import { Methodology } from "@/components/sections/Methodology";
import { SourcesCarousel } from "@/components/sections/SourcesCarousel";
import { Technology } from "@/components/sections/Technology";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Commitments />
      <SourcesCarousel />
      <Technology />
      <Expertise />
      <ChatbotPromo />
      <Methodology />
    </main>
  );
}
