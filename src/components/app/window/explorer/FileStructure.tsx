import { getTreeExpandedState, Tree, useTree } from "@mantine/core";
import DATA from "./data";
import FolderNode from "./FolderNode";
import SampleNode from "./SampleNode";

function FileStructure() {
  return (
    <Tree
      data={DATA}
      selectOnClick
      renderNode={(payload) => <FolderNode {...payload} />}
    />
  );
}

export default FileStructure;
