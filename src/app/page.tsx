import LandingHero from "@/components/home/LandingHero";
// import ScrollProgress from "@/components/home/ScrollProgress";
import ToolsSection from "@/components/home/ToolsSection";
import UseCases from "@/components/home/UseCases";

export default function Home() {
  return (
    <main className="relative">
      {/* <ScrollProgress /> */}
      <LandingHero learnMoreTag="#use-cases" />
      <UseCases />
      <ToolsSection />
    </main>
  );
}
