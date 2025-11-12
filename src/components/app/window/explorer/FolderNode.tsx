import { Group, RenderTreeNodePayload } from "@mantine/core";
import { TriangleDownIcon, TriangleRightIcon } from "@radix-ui/react-icons";

function FolderNode({
  node,
  expanded,
  hasChildren,
  ...elementProps
}: RenderTreeNodePayload) {
  return (
    <Group gap={5} {...elementProps}>
      {expanded ? (
        <TriangleDownIcon className="text-zinc-400" />
      ) : (
        <TriangleRightIcon className="text-zinc-400" />
      )}
      <span className="text-zinc-400">{node.label}</span>
    </Group>
  );
}

export default FolderNode;
