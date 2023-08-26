import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {MdDangerous} from "react-icons/md";

import Header from "../components/Header";
import SideNavBar from "../components/SideNavBar";
import ContactCard from "../components/ContactCard";

function Contacts() {
  const contacts = useSelector((state: any) => state.contacts);
  const renderNoContactFound = () => {
    return (
      <div className="flex flex-col justify-center items-center portrait:w-11/12">
        <img
          className="my-10"
          src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1683130740/Group_7522something-went-wrong-image_hjsfjr.png"
          alt="not-found"
        />
        <div className="flex justify-center items-center w-9/12 portrait:w-11/12 font-bold bg-red-100 border-red-200 border-4   text-red-300">
          <MdDangerous className="text-9xl text-center text-red-300 " />
          <h1 className="text-3xl portrait:text-sm text-center">
            No Contact Found Please add contact from Create Contact Button
          </h1>
        </div>
      </div>
    );
  };

  const renderContacts = () => {
    return (
      <div className="w-full flex flex-col justify-center items-center ">
        <ul className="w-full flex flex-wrap justify-center ">
          {contacts.map((contact: any) => {
            const { id } = contact;
            return <ContactCard key={id} contactDetails={contact} />;
          })}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div className="flex w-full ">
        <SideNavBar />
        {/* Contact Container */}
        <div className="w-full min-h-screen flex flex-col justify-center items-center pt-32 pl-52 portrait:pl-0   border-purple-300 border-4">
          <Link to="/contact-form">
            <button className="px-6 hover:px-10  py-2 hover:py-4 hover:text-3xl font-bold bg-violet-100 border-violet-200 text-violet-400 mt-3 ml-0 border-2 rounded-lg">
              Create Contact
            </button>
          </Link>
          {contacts.length === 0 ? renderNoContactFound() : renderContacts()}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
