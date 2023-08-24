import Header from "../components/Header";
import SideNavBar from "../components/SideNavBar";

function ContactForm() {
  return (
    <div>
      <Header />
      <div className="flex w-full">
        <SideNavBar />
        {/* Contact Form Container */}
        <div className="flex justify-center items-center  ml-52 w-full h-screen">
          <h1>Contact Form</h1>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
