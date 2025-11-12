import { Divider } from "@mantine/core";
import Tab from "./tabs/Tab";
import { TabType, TOOLS, VIEWS } from "./tabs/tabs";

interface Props {
  selectedTabLabel: string | null;
  onTabSelect: (tab: TabType) => void;
}

function Sidebar({ selectedTabLabel, onTabSelect }: Props) {
  return (
    <div className="flex flex-row">
      <div
        id="sidebar"
        className="flex flex-col h-full bg-zinc-900 w-[3dvw] min-w-[3rem] py-4 items-center justify-between"
      >
        <div className="flex flex-col space-y-2 w-full items-end">
          {VIEWS.map((tab) => (
            <Tab
              key={tab.label}
              tab={tab}
              isSelected={selectedTabLabel === tab.label}
              onSelect={() => onTabSelect(tab)}
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
                isSelected={selectedTabLabel === tab.label}
                onSelect={() => onTabSelect(tab)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
