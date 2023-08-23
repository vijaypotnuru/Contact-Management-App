import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contacts from "./pages/contacts";
import ChartsAndMaps from "./pages/chartsAndMaps";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Contacts} />
      <Route path="/charts-maps" Component={ChartsAndMaps} />
    </Routes>
  );
}

export default App;
