import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center p-1 border-b-2 fixed w-full bg-white  ">
      <div className="flex items-center pl-6 p-0 cursor-pointer">
        <Link to="/">
          <img
            className="w-auto h-auto m-0 p-0"
            src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1692858500/colorfilterlogo_qugeno.png"
            alt="logo"
          />
        </Link>
      </div>

      <div className="w-full flex items-center justify-center p-0">
        <h1 className="text-black text-2xl p-0 m-0">Contact Manager</h1>
      </div>
    </header>
  );
}

export default Header;
