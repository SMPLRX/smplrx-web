import SplitPanel from "../SplitPanel";
import FileStructure from "./FileStructure";

const N_SAMPLES = 1235341;

function Explorer() {
  return (
    <SplitPanel
      left={
        <div className="flex flex-col w-full h-full space-y-2 p-4">
          <div className="flex flex-row w-full justify-between items-center">
            <h1 className="text-zinc-400 font-bold text-lg uppercase">
              Explorer
            </h1>
            <p className="text-[var(--mantine-color-blue-6)]">
              {N_SAMPLES.toLocaleString()} Samples
            </p>
          </div>
          <FileStructure />
        </div>
      }
      right={<div>Right Content</div>}
    />
  );
}

export default Explorer;
