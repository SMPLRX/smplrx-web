"use client";

import Bottombar from "@/components/app/Bottombar";
import Sidebar from "@/components/app/sidebar/Sidebar";
import { TabType, VIEWS } from "@/components/app/sidebar/tabs/tabs";
import Topbar from "@/components/app/topbar/Topbar";
import Window from "@/components/app/window/Window";
import { useState } from "react";

export default function App() {
  const [selectedTab, setSelectedTab] = useState<TabType>(VIEWS[0]);

  return (
    <div className="flex flex-col w-screen h-screen overflow-clip justify-between bg-zinc-950">
      <Topbar />
      <div className="flex flex-row h-full">
        <Sidebar
          selectedTabLabel={selectedTab.label}
          onTabSelect={setSelectedTab}
        />
        <Window selectedTab={selectedTab} />
      </div>
      <Bottombar />
    </div>
  );
}
