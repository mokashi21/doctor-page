import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Gynco from "./pages/SubService/Gynco";
import Book from "./pages/Book";
import Obes from "./pages/SubService/Obes";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking-slot-ladycare-clinic" element={<Book />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gyncology" element={<Gynco />} />
          <Route path="/obesity" element={<Obes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
