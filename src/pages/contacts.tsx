// Import necessary modules and components
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdDangerous } from "react-icons/md";
import Header from "../components/Header";
import SideNavBar from "../components/SideNavBar";
import ContactCard from "../components/ContactCard";

// React functional component for displaying a list of contacts
function Contacts() {
  // Access the 'contacts' state from the Redux store
  const contacts = useSelector((state: any) => state.contacts);

  // Helper function to render a message when no contacts are found
  const renderNoContactFound = () => {
    return (
      <div className="flex flex-col justify-center items-center portrait:w-11/12">
        {/* Display an image indicating something went wrong */}
        <img
          className="my-10"
          src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1683130740/Group_7522something-went-wrong-image_hjsfjr.png"
          alt="not-found"
        />
        <div className="flex justify-center items-center w-9/12 portrait:w-11/12 font-bold bg-red-100 border-red-200 border-4 text-red-300">
          {/* Display a danger icon */}
          <MdDangerous className="text-9xl text-center text-red-300" />
          {/* Display a message indicating no contacts found */}
          <h1 className="text-3xl portrait:text-sm text-center">
            No Contact Found Please add contact from Create Contact Button
          </h1>
        </div>
      </div>
    );
  };

  // Helper function to render the list of contacts
  const renderContacts = () => {
    return (
      <div className="w-full flex flex-col justify-center items-center">
        {/* Display a list of contact cards */}
        <ul className="w-full flex flex-wrap justify-center">
          {contacts.map((contact: any) => {
            const { id } = contact;
            return <ContactCard key={id} contactDetails={contact} />;
          })}
        </ul>
      </div>
    );
  };

  // Return the JSX of the component
  return (
    <div>
      {/* Display the Header */}
      <Header />
      <div className="flex w-full">
        {/* Display the Side Navigation Bar */}
        <SideNavBar />
        {/* Contact Container */}
        <div className="w-full min-h-screen flex flex-col justify-center items-center pt-32 pl-52 portrait:pl-0 border-purple-300 border-4">
          {/* Link to navigate to the contact form */}
          <Link to="/contact-form">
            <button className="px-6 hover:px-10 py-2 hover:py-4 hover:text-3xl font-bold bg-violet-100 border-violet-200 text-violet-400 mt-3 ml-0 border-2 rounded-lg">
              Create Contact
            </button>
          </Link>
          {/* Conditional rendering based on contacts availability */}
          {contacts.length === 0 ? renderNoContactFound() : renderContacts()}
        </div>
      </div>
    </div>
  );
}

// Export the Contacts component as the default export
export default Contacts;
