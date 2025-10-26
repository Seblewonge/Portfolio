import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contacts/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Pages/Portfolio/Portfolio";
 import Routing from "./Utility/Router";
import About from "./Pages/About/About";
// import ScrollToTop from "./common/ScrollToTop";

function App() {
  return (

    <>
      
        <Navbar /> {/* Navbar always visible */}
        <Routing /> {/* Handles all pages */}
        <Footer /> {/* Footer always visible */}
     
    </>
  );
}

export default App;
