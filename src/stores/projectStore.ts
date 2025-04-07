import { Project } from "@/types/Project";
import { create } from "zustand";

type ProjectStore = {
  projects: Project[];
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
};

export const useProjectStore = create<ProjectStore>()((set) => ({
  projects: [
    {
      name: "Classifier",
      type: "Tool",
      status: "In Progress",
      description:
        "Automatically detect whether a sample is a loop or one-shot.",
      progress: {
        "In Progress": ["Build classification UI", "Envelope analysis logic"],
        Todo: ["Drag and drop upload", "Audio preview"],
        Done: ["Base model integration"],
      },
    },
    {
      name: "Tagger",
      type: "Tool",
      status: "Coming Soon",
      description: "Assign tags like tempo, pitch, instrument, and mood.",
      progress: {
        "In Review": [],
        Todo: ["Design tagging UI", "Integrate audio embedding model"],
      },
    },
    {
      name: "Generator",
      type: "Tool",
      status: "Not Scheduled",
      description: "Generate new samples using AI-based transformations.",
      progress: {
        Deferred: ["Define augmentation pipeline", "Model research"],
      },
    },
    {
      name: "SAMPLX (Desktop)",
      type: "Application",
      status: "In Progress",
      description:
        "A standalone app to manage, preview, and process your sample library.",
      progress: {
        "In Progress": ["Design main UI", "Library import/export"],
        Todo: ["Drag-and-drop sample analysis", "Batch tagging"],
      },
    },
    {
      name: "SAMPLX (VST Plugin)",
      type: "Application",
      status: "Planned",
      description:
        "A plugin version of the sample manager for use inside your DAW.",
      progress: {
        Todo: ["Define audio routing", "DAW compatibility research"],
      },
    },
    {
      name: "SAMPLX Companion",
      type: "Application",
      status: "Not Scheduled",
      description:
        "Manage cloud-stored samples and record ideas from your phone.",
      progress: {
        Deferred: ["Audio recorder module", "Cloud sync integration"],
      },
    },
  ],
  selectedProject: null,
  setSelectedProject: (project) => set({ selectedProject: project }),
}));
