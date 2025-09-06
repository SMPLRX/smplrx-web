import { useCallback } from "react";
import { TabType, TOOLS, VIEWS } from "./tabs/tabs";
import { ActionIcon, Divider, Tooltip } from "@mantine/core";
import Tab from "./tabs/Tab";

interface Props {
  selectedTab: string | null;
  onTabSelect: (tab: string | null) => void;
}

function Sidebar({ selectedTab, onTabSelect }: Props) {
  return (
    <div
      id="sidebar"
      className="flex flex-col h-full bg-zinc-900 w-[3dvw] min-w-[3rem] py-4 items-center justify-between"
    >
      <div className="flex flex-col space-y-2 w-full items-end">
        {VIEWS.map((tab) => (
          <Tab
            key={tab.label}
            tab={tab}
            isSelected={selectedTab === tab.label}
            onSelect={() =>
              onTabSelect(selectedTab === tab.label ? null : tab.label)
            }
          />
        ))}
      </div>
      <div className="flex flex-col space-y-4 w-full items-center">
        <Divider color="dark" orientation="horizontal" className="w-[60%]" />
        <div className="flex flex-col space-y-2 w-full items-end">
          {TOOLS.map((tab) => (
            <Tab
              key={tab.label}
              tab={tab}
              isSelected={selectedTab === tab.label}
              onSelect={() =>
                onTabSelect(selectedTab === tab.label ? null : tab.label)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
