import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Booked from "./components/Booked/Booked";
import Navbar from "./components/Navbar/Navbar";
import Tour from "./components/Tour/Tour";
import Aboutus from "./pages/Aboutus/Aboutus";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/tours/:id" element={<Tour />} />
      </Routes>
    </div>
  );
}

export default App;
