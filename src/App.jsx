import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import ImdbMovies from "./components/ImdbMovies";
import Sign from "./components/Sign";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />


        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

     
        <Route path="/movies" element={<ImdbMovies />} />

    
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;