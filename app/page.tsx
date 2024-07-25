import Home from "./components/Sections/Home/Home"
import AboutMe from "./components/Sections/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Sections/Skills/Skills";
import Projects from "./components/Sections/Projects/Projects";
import MouseFollowerWrapper from "./components/MouseFollower/MouseFollower.wrapper";

export default function HomePage() {
  return (
    <main>
      <div className="App">
        <MouseFollowerWrapper />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
