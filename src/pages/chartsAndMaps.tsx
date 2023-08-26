// Import necessary components
import Header from "../components/Header"; // Importing the Header component
import SideNavBar from "../components/SideNavBar"; // Importing the SideNavBar component

import CasesChart from "../components/CasesChart"; // Importing the CasesChart component
import CasesMap from "../components/CasesMap"; // Importing the CasesMap component
import CasesDashBoard from "../components/CasesDashBoard"; // Importing the CasesDashBoard component

// React functional component for displaying charts and maps
function ChartsAndMaps() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main content container */}
      <div className="flex w-full min-h-screen m-0 pb-10 pt-28 border-violet-300 border-4">
        {/* Side navigation bar */}
        <SideNavBar />

        {/* Main content area */}
        <div className="w-full h-full flex flex-col justify-center items-center px-10 pl-52 portrait:pl-0 portrait:p-0">
          {/* Chart Container */}
          <CasesChart />

          {/* Divider */}
          <hr className="w-11/12 mx-auto my-5 border-violet-200 border-2" />

          {/* Dashboard Container */}
          <CasesDashBoard />

          {/* Divider */}
          <hr className="w-11/12 mx-auto my-5 border-violet-200 border-2" />

          {/* Map Container */}
          <CasesMap />
        </div>
      </div>
    </div>
  );
}

// Export the ChartsAndMaps component as the default export
export default ChartsAndMaps;
