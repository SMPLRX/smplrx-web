export type ProjectType = "Tool" | "Application";

export const PROJECT_STATUSES = [
  "Planned",
  "Not Scheduled",
  "Coming Soon",
  "In Progress",
  "Done",
] as const;

export type ProjectStatus = (typeof PROJECT_STATUSES)[number];

export const DEV_STATUSES = [
  "Todo",
  "In Progress",
  "In Review",
  "Done",
  "Backlog",
] as const;

export type DevStatus = (typeof DEV_STATUSES)[number];

export const PROJECT_STATUS_MAP: Record<ProjectStatus, DevStatus> = {
  Planned: "Todo",
  "Not Scheduled": "Backlog",
  "Coming Soon": "In Review",
  "In Progress": "In Progress",
  Done: "Done",
};

export type ProjectProgress = Partial<
  Record<(typeof PROJECT_STATUS_MAP)[ProjectStatus], string[]>
>;

export type Project = {
  name: string;
  type: ProjectType;
  status: ProjectStatus;
  description: string;
  progress: ProjectProgress;
};
