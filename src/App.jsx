import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import About from "./pages/About";
import Advertising from "./pages/Advertising";
import BoxOfficeMojo from "./pages/BoxOfficeMojo";
import Conditions from "./pages/Conditions";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Home from "./pages/Home";
import IMDbPro from "./pages/IMDbPro";
import Jobs from "./pages/Jobs";
import PressRoom from "./pages/PressRoom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Series from "./pages/Series";
import SiteIndex from "./pages/SiteIndex";

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
        <Route path="/help" element={<Help />} />
        <Route path="/site-index" element={<SiteIndex />} />
        <Route path="/imdbpro" element={<IMDbPro />} />
        <Route path="/box-office-mojo" element={<BoxOfficeMojo />} />
        <Route path="/press-room" element={<PressRoom />} />
        <Route path="/advertising" element={<Advertising />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

     
        <Route path="/movies" element={<ImdbMovies />} />
        <Route path="/series" element={<Series />} />

    
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
