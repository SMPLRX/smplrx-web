/** @jsxImportSource @emotion/react */
import { Tooltip } from "@mantine/core";
import { TabType } from "./tabs";

interface Props {
  tab: TabType;
  isSelected: boolean;
  onSelect: () => void;
}

function TabType({
  tab: { icon, label, tooltip },
  onSelect,
  isSelected,
}: Props) {
  return (
    <div className="flex w-full justify-center">
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
        <button
          onClick={onSelect}
          css={{
            "@property --tw-border-style": {
              syntax: "*",
              inherits: false,
              initialValue: "solid",
            },
            marginLeft: "var(--spacing)",
            borderStyle: "var(--tw-border-style)",
            borderLeftWidth: "4px",
            borderTopWidth: "1px",
            borderBottomWidth: "1px",
            borderColor: isSelected
              ? "var(--mantine-color-blue-6)"
              : "var(--color-zinc-900)",
            paddingBlock: "calc(var(--spacing) * 3)",
            paddingLeft: "calc(var(--spacing) * 2)",
            paddingRight: `calc(var(--spacing) * 2 + var(--spacing) * ${
              isSelected ? -1 : 2
            })`,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            color: isSelected
              ? "var(--mantine-color-blue-6)"
              : "var(--color-zinc-400)",
            borderTopLeftRadius: "var(--radius)",
            borderBottomLeftRadius: "var(--radius)",
            backgroundColor: isSelected
              ? "var(--color-zinc-950)"
              : "transparent",
          }}
        >
          {icon()}
        </button>
      </Tooltip>
    </div>
  );
}

export default TabType;
