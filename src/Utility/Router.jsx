import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Contact from "../Pages/Contacts/Contact";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Routing = () => {
  return (
    <Routes>
      {/* ✅ Home page with scrollable sections */}
      <Route path="/" element={<Home />} />

      {/* ✅ Separate full pages */}
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    //     <Router>
    //       <Navbar /> {/* ✅ Navbar now inside Router */}
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/portfolio" element={<Portfolio />} />
    //         <Route path="/contact" element={<Contact />} />
    //       </Routes>
    // <Footer/>
    //     </Router>
  );
};

export default Routing;
