// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;



// pages/Home.js
import React from "react";

function Home() {
  return <h1>Welcome to the Home Page!</h1>;
}

export default Home;


// pages/About.js
import React from "react";

function About() {
  return <h1>About Us</h1>;
}

export default About;



