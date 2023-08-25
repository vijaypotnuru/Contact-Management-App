import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import SideNavBar from "../components/SideNavBar";
import ContactCard from "../components/ContactCard";

function Contacts() {
  const contacts = useSelector((state: any) => state.contacts);
  const renderNoContactFound = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        <img
          className="my-10"
          src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1683130740/Group_7522something-went-wrong-image_hjsfjr.png"
          alt="not-found"
        />
        <div className="bg-red-100 border-red-200 border-4 ">
          <h1 className="text-3xl">
            No Contact Found Please add contact from Create Contact Button
          </h1>
        </div>
      </div>
    );
  };

  const renderContacts = () => {
    return (
      <div className="w-full flex  flex-col justify-center items-center">
        <ul className="w-full flex flex-wrap">
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
        <div className="w-full h-full flex flex-col justify-center items-center pt-32 pl-52 portrait:pl-0 portrait:p-0  h-screen border-red-300 border-4">
          <Link to="/contact-form">
            <button className="pr-6 pl-6 py-2  bg-violet-100 border-violet-200 mt-3 ml-0 border-2 rounded-lg">
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
