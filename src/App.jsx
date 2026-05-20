import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About"
import Publications from "./pages/Publications";
import Research from "./pages/Research";
import Trainings from "./pages/Trainings";
import Seminars from "./pages/Seminars";
import Contact from "./pages/Contact";
import PeerReviewer from "./pages/PeerReviewer";
import Collaboration from "./pages/Collaboration";
import Presentations from "./pages/Presentations";
import SelectedWork from "./pages/SelectedWork";
import Resources from "./pages/Resources";

// Scroll Component
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <main className="sm:pt-18 pt-16 text-primary" id="home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/research" element={<Research />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/presentations" element={<Presentations />} />
          <Route path="/selectedWork" element={<SelectedWork />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/training" element={<Trainings />} />
          <Route path="/reviewer" element={<PeerReviewer />} />
          <Route path="/seminars" element={<Seminars />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;