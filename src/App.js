import "./App.css";
import { Fragment } from "react";
import PersonalInfo from "./components/PersonalInfo";
import AboutMe from "./components/AboutMe";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
function App() {
  return (
    <Fragment>
      <Sidebar />
      <div className="main-container">
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
