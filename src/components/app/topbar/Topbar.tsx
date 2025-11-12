import logo from "@smplrx/smplrx-assets/logos/smplrx.png";
import Search from "./Search";
import Tabs from "./Tabs";

function Topbar() {
  return (
    <div
      id="topbar"
      className="flex flex-row w-full bg-zinc-950 justify-between items-end"
    >
      <div className="flex flex-col w-full border-b">
        <Tabs />
        <Search />
      </div>
      <button
        className="border-b -mt-2"
        style={{ borderColor: "var(--mantine-color-blue-5)" }}
      >
        <img src={logo} alt="Logo" width={120} />
      </button>
    </div>
  );
}

export default Topbar;
