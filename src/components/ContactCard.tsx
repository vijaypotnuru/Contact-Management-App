import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteContact } from "../features/contact/contactSlice";

function ContactCard(props: any) {
  const { contactDetails } = props;
  const { id, firstName, lastName, status } = contactDetails;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className="flex flex-col justify-center items-center w-3/12 bg-gray-50 border-gray-200 border-2 p-4 m-5">
      <div className=" w-72 flex justify-center items-center bg-slate-50  rounded-full p-5">
        <h1 className=" text-2xl font-bold p-0 m-0">
          {firstName[0].toUpperCase()}
        </h1>
      </div>
      <div className="flex flex-col justify-center  mt-5">
        <p className="text-2xl font-bold">First Name : {firstName}</p>
        <p className="text-2xl font-bold">Last Name : {lastName}</p>
        <p className="text-2xl font-bold">Status : {status}</p>
      </div>
      <div className="flex justify-between w-full">
        <Link to={`/contact-form/${id}`}>
          <button
            className="bg-green-100 border-green-200 border-4 rounded-lg pl-5 pr-5 py-2 text-green-700"
            type="button"
          >
            Edit
          </button>
        </Link>
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

export default ContactCard;
