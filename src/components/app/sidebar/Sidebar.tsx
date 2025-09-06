import { useCallback } from "react";
import { Tab, TOOLS, VIEWS } from "./tabs";
import { ActionIcon, Divider, Tooltip } from "@mantine/core";

function Sidebar() {
  const renderTab = useCallback(
    ({ icon, label, tooltip }: Tab) => (
      <Tooltip
        key={label}
        withArrow
        arrowSize={8}
        position="right"
        label={
          <div>
            <h3>{label}</h3>
            <p>{tooltip}</p>
          </div>
        }
      >
        <ActionIcon size={36} variant="transparent">
          {icon()}
        </ActionIcon>
      </Tooltip>
    ),
    []
  );

  return (
    <div
      id="sidebar"
      className="flex flex-col h-full bg-zinc-900 w-[3dvw] min-w-[3rem] border-r px-2 py-4 items-center justify-between"
    >
      <div className="flex flex-col space-y-4">
        {VIEWS.map((tab) => renderTab(tab))}
      </div>
      <div className="flex flex-col space-y-4">
        <Divider color="dark" orientation="horizontal" className="w-full" />
        {TOOLS.map((tab) => renderTab(tab))}
      </div>
    </div>
  );
}

export default Sidebar;
