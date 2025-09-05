import LandingHero from "@/components/home/LandingHero";
// import ScrollProgress from "@/components/home/ScrollProgress";
import ProjectsSection from "@/components/home/ProjectsSection";
import UseCases from "@/components/home/UseCases";

export default function Home() {
  return (
    <main className="relative">
      {/* <ScrollProgress /> */}
      <LandingHero learnMoreTag="#use-cases" />
      <UseCases />
      <ProjectsSection />
    </main>
  );
}
