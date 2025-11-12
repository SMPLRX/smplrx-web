import {
  BookOpenIcon,
  FolderIcon,
  ListFilterIcon,
  MicIcon,
  SparklesIcon,
  TagIcon,
  TagsIcon,
} from "lucide-react";
import { ReactNode } from "react";
import Explorer from "../../window/explorer/Explorer";
export interface TabType {
  label: string;
  icon: ReactNode;
  content: ReactNode;
  tooltip?: string;
  disabled?: boolean;
}

export const VIEWS: TabType[] = [
  {
    label: "Explorer",
    icon: <FolderIcon />,
    tooltip: "Explore your samples",
    content: <Explorer />,
  },
  {
    label: "Libraries",
    icon: <BookOpenIcon />,
    tooltip: "Browse your libraries",
    content: null,
  },
  {
    label: "Tags",
    icon: <TagIcon />,
    tooltip: "Manage your tags",
    content: null,
  },
];

export const TOOLS: TabType[] = [
  {
    label: "Classifier",
    icon: <ListFilterIcon />,
    tooltip: "Classify your samples",
    content: null,
  },
  {
    label: "Tagger",
    icon: <TagsIcon />,
    tooltip: "Tag your samples",
    content: null,
  },
  {
    label: "Generator",
    icon: <SparklesIcon />,
    tooltip: "Generate new samples",
    content: null,
  },
  {
    label: "Record",
    icon: <MicIcon />,
    tooltip: "Record new samples",
    content: null,
  },
];
