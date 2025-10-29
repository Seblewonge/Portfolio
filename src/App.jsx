import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contacts/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
// import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Pages/Portfolio/Portfolio";
 import Routing from "./Utility/Router";
import About from "./Pages/About/About";
// import NavBar from "./Pages/Navbar";
import Header from "./Components/Header/Header";

// import ScrollToTop from "./common/ScrollToTop";

function App() {
  return (
    <div className="main-container">
      {/* <Navbar /> 
      <Routing /> 

      <Footer />  */}
      <Header />
      {/* <NavBar/> */}
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
