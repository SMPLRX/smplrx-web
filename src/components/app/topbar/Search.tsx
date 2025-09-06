import { ActionIcon } from "@mantine/core";
import { SearchIcon } from "lucide-react";

function Search() {
  return (
    <div
      id="search"
      className="flex flex-row bg-zinc-900 h-full rounded-tr-2xl border-t border-r"
      style={{ borderColor: "var(--mantine-color-blue-5)" }}
    >
      <div className="flex flex-row">
        <ActionIcon variant="transparent" size={36} className="m-2 ml-3">
          <SearchIcon />
        </ActionIcon>
      </div>
    </div>
  );
}

export default Search;
