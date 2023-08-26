import { Link , useLocation} from "react-router-dom";

function SideNavBar() {

  const location = useLocation();

  const { pathname } = location;

  const contactButtonClass = pathname === "/" ? "bg-purple-100 border-purple-200 text-purple-500 font-bold" : ""

  const chartsButtonClass = pathname !== "/" ? "bg-purple-100 border-purple-200 text-purple-500 font-bold" : ""

  return (
    <nav className="w-auto min-h-screen border-r-2 top-0 mt-24 p-5 fixed portrait:hidden">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl mr-9 ml-3 mt-3 text-violet-400">DASHBOARD</h1>
        <hr className="w-full border-2 border-gray-200 my-2"  />
        <div className="flex flex-col">
          <Link to="/" className="w-full">
            <button
              className={`${contactButtonClass}  w-full px-6 pt-2 pb-2 mt-3 ml-0 border-2 rounded-lg hover:bg-blue-100 hover:border-blue-200 hover:text-blue-500`}
              type="button"
            >
              Contacts
            </button>
          </Link>
          <Link to="/charts-maps">
            <button
              className={`${chartsButtonClass }  w-full pr-6 pl-6 pt-2 pb-2 mt-3 ml-0 border-2 rounded-lg hover:bg-blue-100 hover:border-blue-200 hover:text-blue-500`}
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
