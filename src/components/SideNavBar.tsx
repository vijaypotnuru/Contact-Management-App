import { Link } from "react-router-dom";

function SideNavBar() {
  return (
    <nav className="w-auto min-h-screen border-r-2 top-0 mt-20 p-5 fixed portrait:hidden">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl underline mr-9 ml-3 mt-3">DASHBOARD</h1>
        <div className="flex flex-col">
          <Link to="/" className="w-full">
            <button
              className="w-full pr-6 pl-6 pt-2 pb-2 mt-3 ml-0 border-2 rounded-lg"
              type="button"
            >
              Contacts
            </button>
          </Link>
          <Link to="/charts-maps">
            <button
              className=" w-full pr-6 pl-6 pt-2 pb-2 mt-3 ml-0 border-2 rounded-lg"
              type="button"
            >
              Charts & Maps
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default SideNavBar;
