import Home from "./components/Sections/Home/Home"
import AboutMe from "./components/Sections/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Sections/Skills/Skills";
import Projects from "./components/Sections/Projects/Projects";
import { ToolboxItem, toolboxItems } from './components/Sections/Skills/toolbox';
import MouseFollowerWrapper from "./components/MouseFollower/MouseFollower.wrapper";


const shuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function HomePage() {
  const shuffledToolboxItems = shuffle(toolboxItems) as ToolboxItem[];
  return (
    <main>
      <div className="App">
        <MouseFollowerWrapper />
        <Home />
        <AboutMe />
        <Skills shuffledToolboxItems={shuffledToolboxItems} />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
