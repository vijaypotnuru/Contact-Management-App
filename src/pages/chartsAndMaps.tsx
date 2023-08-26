import Header from "../components/Header";
import SideNavBar from "../components/SideNavBar";

import CasesChart from "../components/CasesChart";
import CasesMap from "../components/CasesMap";

function ChartsAndMaps() {
  return (
    <div>
      <Header />
      <div className="flex w-full   min-h-screen m-0 pb-10 pt-28 border-violet-300 border-4">
        <SideNavBar />

        <div className="w-full h-full flex flex-col justify-center items-center   px-10 pl-52  portrait:pl-0 portrait:p-0">
          {/* Chart Container */}
          <CasesChart />

          <hr className="w-11/12 mx-auto my-5 border-violet-200 border-2" />
          {/* Map Container */}
          <CasesMap />
        </div>
      </div>
    </div>
  );
}
export default ChartsAndMaps;
