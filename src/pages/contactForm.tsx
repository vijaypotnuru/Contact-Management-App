import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addContact, updateContact } from "../features/contact/contactSlice";
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
  const { id } = useParams<{ id: string }>();

  const editMode = id !== undefined ? true : false;

  const contacts = useSelector((state: any) => state.contacts);

  const contactToEdit = contacts.find((contact: any) => contact.id === id);

  const initialContact = contactToEdit
    ? contactToEdit
    : {
        id: nanoid(),
        firstName: "",
        lastName: "",
        status: "inActive",
      };

  const [contact, setContact] = useState<Contact>(initialContact);

  const dispatch = useDispatch();

  const handleCreateSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addContact(contact));
    alert("Contact Created Successfully");

    setContact({
      id: nanoid(),
      firstName: "",
      lastName: "",
      status: "inActive",
    });
  };

  const navigate = useNavigate();

  const handleUpdateSubmit = (e: any) => {
    e.preventDefault();
    dispatch(updateContact(contact));

    alert("Contact Updated Successfully");

    navigate("/");
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const handleStatusChange = (e: any) => {
    const { value } = e.target;
    setContact({ ...contact, status: value });
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
              onChange={handleStatusChange}
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
              onChange={handleStatusChange}
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
        <div className="flex justify-center items-center  pl-52 portrait:pl-0 portrait:p-0 w-full h-screen">
          <div className="flex flex-col border-2 p-5">
            <h1 className="text-3xl font-bold text-center mb-5">
              Create Contact
            </h1>
            <hr className="w-full mx-auto mb-5" />
            <form
              onSubmit={editMode ? handleUpdateSubmit : handleCreateSubmit}
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

              {editMode ? (
                <>
                  <button
                    type="submit"
                    className="w-11/12 pr-6 pl-6 py-2  bg-blue-100 border-blue-200 text-blue-700 mt-3 ml-0 border-2 rounded-lg"
                  >
                    Update
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="submit"
                    className="w-11/12 pr-6 pl-6 py-2  bg-violet-100 border-violet-200 text-violet-700 mt-3 ml-0 border-2 rounded-lg"
                  >
                    Create
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
