import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import SideNavBar from "../components/SideNavBar";

function Contacts() {
  const contacts = useSelector((state: any) => state.contacts);

  console.log("contactsData:",contacts)

  return (
    <div>
      <Header />
      <div className="flex w-full">
        <SideNavBar />
        {/* Contact Container */}
        <div className="flex justify-center items-center  ml-52 w-full h-screen">
          <Link to="/contact-form">
            <button className="pr-6 pl-6 py-2  bg-violet-100 border-violet-200 mt-3 ml-0 border-2 rounded-lg">
              Create Contact
            </button>
          </Link>

          <ul className="flex flex-col border-2 p-5">
            <li className="flex justify-between items-center mb-5">
              <div className="flex items-center"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
