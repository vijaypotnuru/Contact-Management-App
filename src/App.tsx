// Import necessary components and styles
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contacts from "./pages/contacts";
import ChartsAndMaps from "./pages/chartsAndMaps";
import ContactForm from "./pages/contactForm";

// Main App component
function App() {
  // Define routes for the application using the Routes component
  return (
    <Routes>
      {/* Route for displaying contacts */}
      <Route path="/" Component={Contacts} />

      {/* Route for displaying charts and maps */}
      <Route path="/charts-maps" Component={ChartsAndMaps} />

      {/* Route for creating/editing contacts */}
      <Route path="/contact-form" Component={ContactForm} />

      {/* Route for editing an existing contact */}
      <Route path="/contact-form/:id" Component={ContactForm} />
    </Routes>
  );
}

// Export the App component as the default export
export default App;
