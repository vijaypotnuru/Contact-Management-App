import Header from "../components/Header";
import SideNavBar from "../components/SideNavBar";

import CasesChart from "../components/CasesChart";
import CasesMap from "../components/CasesMap";

function ChartsAndMaps() {
  return (
    <div>
      <Header />
      <div className="flex w-full  border-emerald-400 border-4  h-auto">
        <SideNavBar />

        <div className="w-full flex flex-col justify-center items-center  pl-52  portrait:pl-0 portrait:p-0  h-screen">
          {/* Chart Container */}
          <CasesChart />

          {/* Map Container */}
          <CasesMap />
        </div>
      </div>
    </div>
  );
}
export default ChartsAndMaps;
