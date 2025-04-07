"use client";

import { useProjectStore } from "@/stores/projectStore";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = useProjectStore((s) => s.projects);

  const tools = projects.filter((p) => p.type === "Tool");
  const applications = projects.filter((p) => p.type === "Application");

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-2">
        The SMPLRX Tool Suite
      </h2>
      <p className="text-center text-sm text-muted-foreground mb-6">
        SMPLRX is a modular suite of tools and applications for intelligent
        audio sample management.
        <br />
        <br />
        Click any item below to learn more and view live development progress.
      </p>

      <h3 className="text-lg font-semibold mb-2 mt-8">Core Tools</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {tools.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>

      <h3 className="text-lg font-semibold mb-2 mt-8">Applications</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {applications.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
}
