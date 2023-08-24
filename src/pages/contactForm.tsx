import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../features/contact/contactSlice";
import { nanoid } from "@reduxjs/toolkit";

import Header from "../components/Header";
import SideNavBar from "../components/SideNavBar";

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
}

function ContactForm() {
  const [contact, setContact] = useState<Contact>({
    id: nanoid(),
    firstName: "",
    lastName: "",
    status: "inActive",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addContact(contact));
    setContact({
      id: nanoid(),
      firstName: "",
      lastName: "",
      status: "inActive",
    });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const renderUserFirstNameField = () => {
    const { firstName } = contact;
    return (
      <>
        <label className="text-xl font-bold mb-2" htmlFor="firstName">
          First Name
        </label>
        <input
          onChange={handleInputChange}
          id="firstName"
          className="border-2 border-gray-400 rounded-md p-2"
          type="text"
          name="firstName"
          value={firstName}
          placeholder="Enter your first name"
        />
      </>
    );
  };

  const renderUserLastNameField = () => {
    const { lastName } = contact;
    return (
      <>
        <label className="text-xl font-bold mb-2" htmlFor="lastName">
          Last Name
        </label>
        <input
          onChange={handleInputChange}
          id="lastName"
          className="border-2 border-gray-400 rounded-md p-2"
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Enter your last name"
        />
      </>
    );
  };

  const renderStatusField = () => {
    const { status } = contact;
    return (
      <>
        <label className="text-xl font-bold mb-2 mr-5" htmlFor="status">
          Status :
        </label>
        <div>
          <div>
            <input
              id="active"
              className="border-2 border-gray-400 rounded-md p-2"
              type="radio"
              checked={status === "active"}
              value="active"
              name="active"
            />
            <label className="text-xl font-bold mb-2" htmlFor="active">
              {" "}
              Active
            </label>
          </div>
          <div>
            <input
              id="inActive"
              className="border-2 border-gray-400 rounded-md p-2"
              type="radio"
              checked={status === "inActive"}
              value="inActive"
              name="inActive"
            />
            <label htmlFor="inActive" className="text-xl font-bold mb-2">
              {" "}
              Inactive
            </label>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <Header />
      <div className="flex w-full">
        <SideNavBar />
        {/* Contact Form Container */}
        <div className="flex justify-center items-center  ml-52 w-full h-screen">
          <div className="flex flex-col border-2 p-5">
            <h1 className="text-3xl font-bold text-center mb-5">
              Create Contact
            </h1>
            <hr className="w-full mx-auto mb-5" />
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center"
            >
              <div className="flex flex-col mb-5">
                {renderUserFirstNameField()}
              </div>
              <div className="flex flex-col mb-5">
                {renderUserLastNameField()}
              </div>
              <div className="flex items-center mb-5">
                {renderStatusField()}
              </div>
              <button
                type="submit"
                className="w-11/12 pr-6 pl-6 py-2  bg-violet-100 border-violet-200 mt-3 ml-0 border-2 rounded-lg"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
