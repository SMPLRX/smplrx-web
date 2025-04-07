import { useProjectStore } from "@/stores/projectStore";
import { DEV_STATUSES, Project } from "@/types/Project";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function ProjectCard({ project }: { project: Project }) {
  const selectedProject = useProjectStore((s) => s.selectedProject);
  const setSelectedProject = useProjectStore((s) => s.setSelectedProject);

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
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </motion.button>
      </DialogTrigger>

      <DialogContent className="max-w-[100dvw] w-full min-w-[70dvw]">
        <DialogHeader>
          <DialogTitle>{selectedProject?.name}</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground mb-4">
          {selectedProject?.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm ">
          {DEV_STATUSES.map((col) => (
            <div
              key={col}
              className="bg-muted/30 p-3 rounded-lg border border-border flex flex-col"
            >
              <h4 className="font-semibold mb-2 text-center">{col}</h4>
              <ul className="space-y-1 flex-grow">
                {selectedProject?.progress[col]?.length ? (
                  selectedProject.progress[col].map((task, i) => (
                    <li
                      key={i}
                      className="bg-background p-2 rounded-md shadow-sm border border-border text-xs"
                    >
                      {task}
                    </li>
                  ))
                ) : (
                  <li className="italic text-xs text-muted-foreground text-center">
                    None
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
