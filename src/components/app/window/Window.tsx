import { TabType } from "../sidebar/tabs/tabs";

interface Props {
  selectedTab: TabType;
}

function Window({ selectedTab: { content } }: Props) {
  return (
    <div id="window" className="flex flex-1">
      {content}
    </div>
  );
}

export default Window;
