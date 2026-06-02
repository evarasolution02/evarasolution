import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Cursor from "./sections/Cursor";
import Process from "./sections/Process";
import FAQ from "./sections/FAQ";

import ProjectsPage from "./pages/projectpage";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Process />
      <FAQ />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-white overflow-x-hidden">
        <Cursor />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;