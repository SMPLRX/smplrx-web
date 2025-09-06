import {
  BookOpenIcon,
  FolderIcon,
  ListFilterIcon,
  LucideProps,
  MicIcon,
  SparklesIcon,
  TagIcon,
  TagsIcon,
} from "lucide-react";
import { ReactNode } from "react";
export interface TabType {
  label: string;
  icon: (props?: LucideProps) => ReactNode;
  content: ReactNode;
  tooltip?: string;
  disabled?: boolean
}

export const VIEWS: TabType[] = [
  {
    label: "Explorer",
    icon: (props?: LucideProps) => <FolderIcon {...props} />,
    content: null,
  },
  {
    label: "Libraries",
    icon: (props?: LucideProps) => <BookOpenIcon {...props} />,
    content: null,
  },
  {
    label: "Tags",
    icon: (props?: LucideProps) => <TagIcon {...props} />,
    content: null,
  },
];

export const TOOLS: TabType[] = [
  {
    label: "Classifier",
    icon: (props?: LucideProps) => <ListFilterIcon {...props} />,
    content: null,
  },
  {
    label: "Tagger",
    icon: (props?: LucideProps) => <TagsIcon {...props} />,
    content: null,
  },
  {
    label: "Generator",
    icon: (props?: LucideProps) => <SparklesIcon {...props} />,
    content: null,
  },
  {
    label: "Record",
    icon: (props?: LucideProps) => <MicIcon {...props} />,
    content: null,
  },
];
