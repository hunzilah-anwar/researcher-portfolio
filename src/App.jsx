import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Publications from "./pages/Publications";
import ResearchProjects from "./pages/ResearchProjects";
import Trainings from "./pages/Trainings";
import ResearchArticles from "./pages/ResearchArticles";
import Seminars from "./pages/Seminars";
import Contact from "./pages/Contact";
import PeerReviewer from "./pages/PeerReviewer";

// Scroll Component
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <main className="pt-18 text-primary" id="home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/research-projects" element={<ResearchProjects />} />
          <Route path="/training" element={<Trainings />} />
          <Route path="/research-articles" element={<ResearchArticles />} />
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