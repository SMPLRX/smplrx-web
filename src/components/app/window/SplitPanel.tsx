import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ReactNode } from "react";

interface Props {
  left: ReactNode;
  right: ReactNode;
}

function SplitPanel({ left, right }: Props) {
  return (
    <div className="flex flex-col h-full bg-zinc-950 w-full border-l-3">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={30}>{left}</ResizablePanel>
        <ResizableHandle className="w-1 bg-zinc-800" />
        <ResizablePanel defaultSize={70} className="bg-zinc-900">
          {right}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default SplitPanel;
