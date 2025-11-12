import { Group, RenderTreeNodePayload } from "@mantine/core";

function SampleNode({
  node,
  expanded,
  hasChildren,
  ...elementProps
}: RenderTreeNodePayload) {
  return (
    <Group gap={5} {...elementProps}>
      {/* <FileIcon name={node.value} isFolder={hasChildren} expanded={expanded} /> */}
      <span className="text-white">{node.label}</span>
    </Group>
  );
}

export default SampleNode;
