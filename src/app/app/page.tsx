import Bottombar from "@/components/app/Bottombar";
import Sidebar from "@/components/app/sidebar/Sidebar";
import Topbar from "@/components/app/topbar/Topbar";
import Window from "@/components/app/Window";

export default function App() {
  return (
      <div className="flex flex-col w-screen h-screen overflow-clip justify-between bg-zinc-950">
        <Topbar />
        <div className="flex flex-row h-full">
          <Sidebar />
          <Window />
        </div>
        <Bottombar />
      </div>
  );
}
