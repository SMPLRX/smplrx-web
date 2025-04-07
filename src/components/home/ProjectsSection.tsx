"use client";

import { useProjectStore } from "@/stores/projectStore";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useCallback } from "react";
import { DEV_STATUSES, Project } from "@/types/Project";

export default function ProjectsSection() {
  const projects = useProjectStore((s) => s.projects);
  const selectedProject = useProjectStore((s) => s.selectedProject);
  const setSelectedProject = useProjectStore((s) => s.setSelectedProject);

  const tools = projects.filter((p) => p.type === "Tool");
  const applications = projects.filter((p) => p.type === "Application");

  const renderProjectCard = useCallback(
    (project: Project) => {
      return (
        <Dialog
          key={project.name}
          onOpenChange={(open) => open && setSelectedProject(project)}
        >
          <DialogTrigger asChild>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full p-6 text-left rounded-xl border border-border bg-muted/40 shadow-sm transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <Badge variant="outline">{project.status}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </motion.button>
          </DialogTrigger>

          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle>{selectedProject?.name}</DialogTitle>
            </DialogHeader>
            <p className="text-sm text-muted-foreground mb-4">
              {selectedProject?.description}
            </p>

            <div className="grid grid-cols-3 gap-4 text-sm">
              {DEV_STATUSES.map((col) => (
                <div key={col}>
                  <h4 className="font-semibold mb-2">{col}</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    {selectedProject?.progress[col]?.length ? (
                      selectedProject.progress[col].map((task, i) => (
                        <li key={i}>• {task}</li>
                      ))
                    ) : (
                      <li className="italic text-xs">None</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      );
    },
    [selectedProject, setSelectedProject]
  );

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
        {tools.map(renderProjectCard)}
      </div>

      <h3 className="text-lg font-semibold mb-2 mt-8">Applications</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {applications.map(renderProjectCard)}
      </div>
    </section>
  );
}
