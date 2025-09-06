import { ActionIcon, Avatar, Divider } from "@mantine/core";
import { Settings } from "lucide-react";

function Bottombar() {
  return (
    <div
      id="bottombar"
      className="flex flex-row w-full p-4 space-x-3 border-t items-center bg-zinc-900"
    >
      <ActionIcon
        variant="transparent"
        size={30}
        color="white"
        className="max-w-[2dvw]"
      >
        <Settings size={32} />
      </ActionIcon>
      <Divider orientation="vertical" color="dark" />
      <div
        id="user-info"
        className="flex flex-row space-x-2 items-center text-primary"
      >
        <Avatar>RK</Avatar>
        <p className="font-semibold font-sans">Rishi Khiroya</p>
      </div>
    </div>
  );
}

export default Bottombar;
