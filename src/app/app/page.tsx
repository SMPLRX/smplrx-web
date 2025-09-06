"use client";

import Bottombar from "@/components/app/Bottombar";
import Sidebar from "@/components/app/sidebar/Sidebar";
import Topbar from "@/components/app/topbar/Topbar";
import Window from "@/components/app/Window";
import { useState } from "react";

export default function App() {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  return (
    <div className="flex flex-col w-screen h-screen overflow-clip justify-between bg-zinc-950">
      <Topbar />
      <div className="flex flex-row h-full">
        <Sidebar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
        <Window />
      </div>
      <Bottombar />
    </div>
  );
}
