import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact'
import './App.css';
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from 'react';

function App() {

  let [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row'>
          {/* <div className='col-lg-2 d-lg-block d-none p-0 sidebar_layout' > */}
          <div className={isSidebarOpen ? "col-lg-2 d-lg-block d-none p-0" : "sidebar_layout"} >
            <Sidebar />
          </div>
          <GiHamburgerMenu className='menu-toggle d-none' onClick={() => { setIsSidebarOpen(!isSidebarOpen) }} />
          {/* <div className={isSidebarOpen ? "col-lg-10 p-0" : "col-lg-12 p-0"}    style={{ height: "100vh" }}> */}
          <div className="col-lg-10 p-0" style={{ height: "100vh" }}>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
