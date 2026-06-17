import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import FocusAreas from "./components/FocusAreas.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import ValueProposition from "./components/ValueProposition.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FocusAreas />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <ValueProposition />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
