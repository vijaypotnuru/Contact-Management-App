import React from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteContact } from "../features/contact/contactSlice";

function ContactCard(props: any) {
  // Destructure contactDetails from props
  const { contactDetails } = props;
  const { id, firstName, lastName, email, status } = contactDetails;

  // Access Redux dispatch function
  const dispatch = useDispatch();

  // Handle contact deletion
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  // Render popup component to view contact details
  const renderViewPopup = () => {
    return (
      <div>
        {/* Display contact details in a modal popup */}
        <Popup
          modal
          trigger={
            <button
              className="bg-yellow-100 border-yellow-200 border-4 rounded-lg pl-5 pr-5 py-2 text-yellow-700"
              type="button"
            >
              View
            </button>
          }
        >
          {/* Popup content */}
          <div className="w-5/12 portrait:w-11/12 flex flex-col justify-center items-center m-auto">
            <div className="p-5 rounded-xl bg-indigo-100 border-indigo-300 border-2 flex flex-col justify-center items-center">
              <h1 className="text-indigo-500 my-5 font-bold text-xl">
                Contact Details
              </h1>
              {/* Display profile image */}
              <div className="w-4/12 flex justify-center items-center bg-violet-300 border-violet-400 border-4 rounded-full p-5">
                <img
                  src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1693023269/PngItem_1468281_tcmtx2.png"
                  alt="profile"
                />
              </div>
              {/* Display contact information */}
              <div className="flex flex-col justify-center text-blue-400 mt-5">
                <p className="text-2xl font-bold">
                  First Name :{" "}
                  <span className="text-blue-500 italic">{firstName}</span>
                </p>
                <p className="text-2xl font-bold">
                  Last Name :{" "}
                  <span className="text-blue-500 italic">{lastName}</span>
                </p>
                <p className="text-2xl font-bold">
                  Email : <span className="text-blue-500 italic">{email}</span>
                </p>

                <p className="text-2xl font-bold">
                  {" "}
                  Status :{" "}
                  <span className="text-blue-500 italic">{status}</span>
                </p>
              </div>
            </div>
          </div>
        </Popup>
      </div>
    );
  };

  return (
    <li className="flex flex-col justify-center items-center w-3/12 portrait:w-full bg-blue-50 h-min rounded-lg border-blue-200 border-2 p-4 m-5">
      {/* Display profile image */}
      <div className="w-2/4 flex justify-center items-center bg-indigo-100 border-indigo-200 border-2 rounded-full p-5">
        <img
          src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1693023269/PngItem_1468281_tcmtx2.png"
          alt="profile"
        />
      </div>
      {/* Display contact information */}
      <div className="flex flex-col justify-center mt-5 mb-5 text-blue-400">
        <p className="text-2xl font-bold">
          First Name : <span className="text-blue-500 italic">{firstName}</span>
        </p>
        <p className="text-2xl font-bold">
          Last Name : <span className="text-blue-500 italic">{lastName}</span>
        </p>
        <p className="text-2xl font-bold">
          Status : <span className="text-blue-500 italic">{status}</span>
        </p>
      </div>
      {/* Display buttons for editing, viewing, and deleting */}
      <div className="flex justify-between w-full mt-4">
        {/* Link to edit contact */}
        <Link to={`/contact-form/${id}`}>
          <button
            className="bg-green-100 border-green-200 border-4 rounded-lg pl-5 pr-5 py-2 text-green-700"
            type="button"
          >
            Edit
          </button>
        </Link>
        {/* Render the view popup */}
        {renderViewPopup()}
        {/* Delete contact button */}
        <button
          onClick={handleDelete}
          className="bg-red-100 border-red-200 border-4 rounded-lg pl-5 pr-5 py-2 text-red-700"
          type="button"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

// Export the ContactCard component as the default export
export default ContactCard;
