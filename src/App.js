import "./App.css";
import { Fragment } from "react";
import PersonalInfo from "./components/Home/PersonalInfo";
import AboutMe from "./components/About/AboutMe";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/UI/Sidebar";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactMe from "./components/ContactMe/ContactMe";
function App() {
  return (
    <Fragment>
      <div className="main-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
