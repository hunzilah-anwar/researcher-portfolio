import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
const About = () => <h1 className="text-center">About Page</h1>;
const Projects = () => <h1 className="text-center">Projects Page</h1>;
const Blog = () => <h1 className="text-center">Blog Page</h1>;
const Contact = () => <h1 className="text-center">Contact Page</h1>;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="pt-18 text-primary" id="home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
