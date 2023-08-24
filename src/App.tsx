import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contacts from "./pages/contacts";
import ChartsAndMaps from "./pages/chartsAndMaps";
import ContactForm from "./pages/contactForm";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Contacts} />
      <Route path="/charts-maps" Component={ChartsAndMaps} />
      <Route path="/contact-form" Component={ContactForm} />
    </Routes>
  );
}

export default App;
